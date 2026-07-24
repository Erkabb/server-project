/// <reference types="jest" />
import { addUser } from "../../../src/resolvers/mutations";
import { GraphQLResolveInfo } from "graphql";
import User from "../../../src/models/auth.model";
import { AddUserInput } from "../../../src/generated/graphql";
import { Context } from "../../../src/types";

// Mock the auth model
jest.mock("../../../src/models/auth.model", () => ({
  __esModule: true,
  default: {
    create: jest.fn(),
    findOne: jest.fn(),
  },
}));

const mockUserModel = User as jest.Mocked<typeof User>;

describe("addUser Resolver", () => {
  const mockUser: AddUserInput = {
    email: "test@example.com",
    firstname: "John",
    lastname: "Doe",
    password: "securePassword123",
    phoneNumber: "1234567890",
    userLevel: "admin",
    websiteId: "website-1",
  };

  const mockContext: Context = {
    userId: "mock-user-id",
    websiteId: "website-1",
    role: "admin",
  };

  const mockData = {} as GraphQLResolveInfo;

  beforeEach(() => {
    jest.clearAllMocks();
    // Default: the authenticated caller exists on this website
    mockUserModel.findOne.mockResolvedValue({
      _id: "mock-user-id",
      email: "admin@example.com",
      role: "admin",
    } as any);
  });

  describe("Successful user creation", () => {
    it("should create a new user successfully when authenticated", async () => {
      const createdUser = {
        _id: "new-user-id",
        ...mockUser,
        role: "user",
      };
      mockUserModel.create.mockResolvedValue(createdUser as any);

      const result = await addUser!(
        {},
        { input: mockUser },
        mockContext,
        mockData,
      );

      expect(mockUserModel.findOne).toHaveBeenCalledWith({
        _id: "mock-user-id",
        websiteId: "website-1",
      });
      expect(mockUserModel.create).toHaveBeenCalledWith({
        ...mockUser,
        role: "user",
      });
      expect(result).toEqual(createdUser);
    });
  });

  describe("Authentication errors", () => {
    it("should throw an error if userId is not provided in context", async () => {
      const contextWithoutUserId: Context = {
        userId: null,
        websiteId: "website-1",
        role: null,
      };

      await expect(
        addUser!({}, { input: mockUser }, contextWithoutUserId, mockData),
      ).rejects.toThrow("Not authenticated");

      expect(mockUserModel.create).not.toHaveBeenCalled();
    });

    it("should throw an error if the caller does not exist on this website", async () => {
      mockUserModel.findOne.mockResolvedValue(null);

      await expect(
        addUser!({}, { input: mockUser }, mockContext, mockData),
      ).rejects.toThrow("Invalid website access");

      expect(mockUserModel.create).not.toHaveBeenCalled();
    });

    it("should throw an error when input targets a different website", async () => {
      const wrongWebsiteInput: AddUserInput = {
        ...mockUser,
        websiteId: "another-website",
      };

      await expect(
        addUser!({}, { input: wrongWebsiteInput }, mockContext, mockData),
      ).rejects.toThrow("Forbidden: wrong website");

      expect(mockUserModel.create).not.toHaveBeenCalled();
    });
  });

  describe("Database errors", () => {
    it("should handle database connection errors", async () => {
      mockUserModel.create.mockRejectedValue(
        new Error("Database connection failed"),
      );

      await expect(
        addUser!({}, { input: mockUser }, mockContext, mockData),
      ).rejects.toThrow("Database connection failed");
    });

    it("should handle duplicate email errors", async () => {
      mockUserModel.create.mockRejectedValue(
        new Error("E11000 duplicate key error"),
      );

      await expect(
        addUser!({}, { input: mockUser }, mockContext, mockData),
      ).rejects.toThrow("E11000 duplicate key error");
    });
  });
});
