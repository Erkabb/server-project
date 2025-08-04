/// <reference types="jest" />
import { addUser } from "../../../src/resolvers/mutations";
import { GraphQLResolveInfo } from "graphql";
import User from "../../../src/models/auth.model";
import { AddUserInput } from "../../../src/generated/graphql";
import { Context } from "../../../src/types";

// Mock the auth model
jest.mock('../../../src/models/auth.model', () => ({
  __esModule: true,
  default: {
    create: jest.fn(),
    findById: jest.fn(),
  }
}));

// Mock the User model instance
const mockUserModel = User as jest.Mocked<typeof User>;

describe('addUser Resolver', () => {
  const mockUser: AddUserInput = {
    email: 'test@example.com',
    firstname: 'John',
    lastname: 'Doe',
    password: 'securePassword123',
    phoneNumber: '1234567890',
    userLevel: 'admin',
  };

  const mockContext: Context = {
    userId: 'mock-user-id'
  };

  const mockData = {} as GraphQLResolveInfo;

  beforeEach(() => {
    jest.clearAllMocks();
    // Default mock for findById to return a user (authenticated)
    mockUserModel.findById.mockResolvedValue({
      _id: 'mock-user-id',
      email: 'admin@example.com',
      role: 'admin'
    } as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Successful user creation', () => {
    it('should create a new user successfully when authenticated', async () => {
      // Mock the create method to return the created user
      const createdUser = {
        _id: 'new-user-id',
        ...mockUser,
        role: 'user'
      };
      mockUserModel.create.mockResolvedValue(createdUser as any);

      const result = await addUser!({}, { input: mockUser }, mockContext, mockData);

      expect(mockUserModel.findById).toHaveBeenCalledWith('mock-user-id');
      expect(mockUserModel.create).toHaveBeenCalledWith({
        firstname: 'John',
        lastname: 'Doe',
        phoneNumber: '1234567890',
        email: 'test@example.com',
        password: 'securePassword123',
        role: 'user',
        userLevel: 'admin',
      });
      expect(result).toEqual(createdUser);
    });

    it('should create user with default role when userLevel is not provided', async () => {
      const userWithoutLevel: AddUserInput = {
        email: 'test@example.com',
        firstname: 'John',
        lastname: 'Doe',
        password: 'securePassword123',
        phoneNumber: '1234567890',
      };

      const createdUser = {
        _id: 'new-user-id',
        ...userWithoutLevel,
        role: 'user',
        userLevel: undefined
      };
      mockUserModel.create.mockResolvedValue(createdUser as any);

      const result = await addUser!({}, { input: userWithoutLevel }, mockContext, mockData);

      expect(mockUserModel.create).toHaveBeenCalledWith({
        firstname: 'John',
        lastname: 'Doe',
        phoneNumber: '1234567890',
        email: 'test@example.com',
        password: 'securePassword123',
        role: 'user',
        userLevel: undefined,
      });
      expect(result).toEqual(createdUser);
    });
  });

  describe('Authentication errors', () => {
    it('should throw an error if user is not authenticated', async () => {
      // Mock findById to return null (not authenticated)
      mockUserModel.findById.mockResolvedValue(null);

      await expect(addUser!({}, { input: mockUser }, mockContext, mockData))
        .rejects.toThrow('User must signed in');
      
      expect(mockUserModel.findById).toHaveBeenCalledWith('mock-user-id');
      expect(mockUserModel.create).not.toHaveBeenCalled();
    });

    it('should throw an error if userId is not provided in context', async () => {
      const contextWithoutUserId: Context = { userId: null };
      
      // Mock findById to return null when userId is null
      mockUserModel.findById.mockResolvedValue(null);

      await expect(addUser!({}, { input: mockUser }, contextWithoutUserId, mockData))
        .rejects.toThrow('User must signed in');
      
      expect(mockUserModel.findById).toHaveBeenCalledWith(null);
      expect(mockUserModel.create).not.toHaveBeenCalled();
    });
  });

  describe('Database errors', () => {
    it('should handle database connection errors', async () => {
      mockUserModel.create.mockRejectedValue(new Error('Database connection failed'));

      await expect(addUser!({}, { input: mockUser }, mockContext, mockData))
        .rejects.toThrow('Database connection failed');
    });

    it('should handle duplicate email errors', async () => {
      const duplicateError = new Error('E11000 duplicate key error');
      mockUserModel.create.mockRejectedValue(duplicateError);

      await expect(addUser!({}, { input: mockUser }, mockContext, mockData))
        .rejects.toThrow('E11000 duplicate key error');
    });
  });

  describe('Input validation', () => {
    it('should handle missing required fields gracefully', async () => {
      const incompleteUser: AddUserInput = {
        email: 'test@example.com',
        firstname: 'John',
        lastname: 'Doe',
        password: 'securePassword123',
        phoneNumber: '1234567890',
      };

      // Mock create to throw an error for missing fields
      mockUserModel.create.mockRejectedValue(new Error('Validation failed'));

      await expect(addUser!({}, { input: incompleteUser }, mockContext, mockData))
        .rejects.toThrow('Validation failed');
      
      expect(mockUserModel.create).toHaveBeenCalledWith({
        firstname: 'John',
        lastname: 'Doe',
        phoneNumber: '1234567890',
        email: 'test@example.com',
        password: 'securePassword123',
        role: 'user',
        userLevel: undefined,
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle null input gracefully', async () => {
      await expect(addUser!({}, { input: null as any }, mockContext, mockData))
        .rejects.toThrow();
    });

    it('should handle undefined input gracefully', async () => {
      await expect(addUser!({}, { input: undefined as any }, mockContext, mockData))
        .rejects.toThrow();
    });
  });
});