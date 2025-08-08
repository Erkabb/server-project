import { createOrder } from "../../../src/resolvers/mutations";
import { GraphQLResolveInfo } from "graphql";

// Mock the models
jest.mock('../../../src/models/auth.model', () => ({
    __esModule: true,
    default: {
        findById: jest.fn()
    }
}));

jest.mock('../../../src/models/product.model', () => ({
    __esModule: true,
    default: {
        findById: jest.fn(),
        findByIdAndUpdate: jest.fn()
    }
}));

jest.mock('../../../src/models/order.model', () => ({
    __esModule: true,
    default: {
        create: jest.fn()
    }
}));

import User from '../../../src/models/auth.model';
import Product from '../../../src/models/product.model';
import Order from '../../../src/models/order.model';

describe('createOrder Resolver', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockOrderInput = {
        productId: 'product123',
        quantity: 2,
        total: 200,
        unitPrice: 100,
        discount: 0,
        leftQuantity: 8,
        userAddress: '123 Test St',
        pickUpLocation: 'Store A',
        phoneNumber: '+1234567890',
        availableHours: 8,
        pickedStaff: 2
    };

    it('should create order successfully', async () => {
        // Mock user exists
        (User.findById as jest.Mock).mockResolvedValue({ _id: 'user123' });
        
        // Mock product exists with sufficient quantity
        (Product.findById as jest.Mock).mockResolvedValue({
            _id: 'product123',
            quantity: 10
        });
        
        // Mock order creation
        (Order.create as jest.Mock).mockResolvedValue({
            _id: 'order123',
            ...mockOrderInput,
            status: 'pending'
        });
        
        // Mock product update
        (Product.findByIdAndUpdate as jest.Mock).mockResolvedValue({});

        const result = await createOrder!(
            {},
            { input: mockOrderInput },
            { userId: 'user123' },
            {} as GraphQLResolveInfo
        );

        expect(result).toEqual({
            message: "Order successfully created!"
        });

        expect(User.findById).toHaveBeenCalledWith('user123');
        expect(Product.findById).toHaveBeenCalledWith('product123');
        expect(Order.create).toHaveBeenCalledWith({
            productId: 'product123',
            quantity: 2,
            total: 200,
            unitPrice: 100,
            discount: 0,
            leftQuantity: 8,
            userAddress: '123 Test St',
            pickUpLocation: 'Store A',
            phoneNumber: '+1234567890',
            availableHours: 8,
            pickedStaff: 2,
            status: 'pending'
        });
        expect(Product.findByIdAndUpdate).toHaveBeenCalledWith('product123', {
            $inc: {
                quantity: -2,
                soldQuantity: 2
            }
        });
    });

    it('should throw error if user not logged in', async () => {
        (User.findById as jest.Mock).mockResolvedValue(null);

        await expect(
            createOrder!(
                {},
                { input: mockOrderInput },
                { userId: 'user123' },
                {} as GraphQLResolveInfo
            )
        ).rejects.toThrow('Must be logged in');

        expect(User.findById).toHaveBeenCalledWith('user123');
        expect(Product.findById).not.toHaveBeenCalled();
        expect(Order.create).not.toHaveBeenCalled();
    });

    it('should throw error if product not found', async () => {
        (User.findById as jest.Mock).mockResolvedValue({ _id: 'user123' });
        (Product.findById as jest.Mock).mockResolvedValue(null);

        await expect(
            createOrder!(
                {},
                { input: mockOrderInput },
                { userId: 'user123' },
                {} as GraphQLResolveInfo
            )
        ).rejects.toThrow('Product not found');

        expect(User.findById).toHaveBeenCalledWith('user123');
        expect(Product.findById).toHaveBeenCalledWith('product123');
        expect(Order.create).not.toHaveBeenCalled();
    });

    it('should throw error if insufficient product quantity', async () => {
        (User.findById as jest.Mock).mockResolvedValue({ _id: 'user123' });
        (Product.findById as jest.Mock).mockResolvedValue({
            _id: 'product123',
            quantity: 1 // Less than requested quantity of 2
        });

        await expect(
            createOrder!(
                {},
                { input: mockOrderInput },
                { userId: 'user123' },
                {} as GraphQLResolveInfo
            )
        ).rejects.toThrow('Insufficient product quantity available');

        expect(User.findById).toHaveBeenCalledWith('user123');
        expect(Product.findById).toHaveBeenCalledWith('product123');
        expect(Order.create).not.toHaveBeenCalled();
    });

    it('should throw error if order creation fails', async () => {
        (User.findById as jest.Mock).mockResolvedValue({ _id: 'user123' });
        (Product.findById as jest.Mock).mockResolvedValue({
            _id: 'product123',
            quantity: 10
        });
        (Order.create as jest.Mock).mockRejectedValue(new Error('Database error'));

        await expect(
            createOrder!(
                {},
                { input: mockOrderInput },
                { userId: 'user123' },
                {} as GraphQLResolveInfo
            )
        ).rejects.toThrow('Failed to create order');

        expect(User.findById).toHaveBeenCalledWith('user123');
        expect(Product.findById).toHaveBeenCalledWith('product123');
        expect(Order.create).toHaveBeenCalled();
    });
});