/// <reference types="jest" />
import { updateUserRole } from "../../../src/resolvers/mutations";
import { GraphQLResolveInfo } from "graphql";
import User from "../../../src/models/auth.model";
import { Context } from "../../../src/types";

jest.mock("../../../src/models/auth.model", () => ({
  __esModule: true,
  default: {
    findOne: jest.fn(),
    findOneAndUpdate: jest.fn(),
  },
}));

const mockUserModel = User as jest.Mocked<typeof User>;

describe("updateUserRole Resolver", () => {
  const adminContext: Context = {
    userId: "admin-id",
    websiteId: "website-1",
    role: "admin",
  };

  const input = { userId: "target-id", role: "admin" };
  const info = {} as GraphQLResolveInfo;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUserModel.findOne.mockResolvedValue({
      _id: "admin-id",
      role: "admin",
    } as any);
  });

  it("should let an admin promote a user", async () => {
    const updatedUser = { _id: "target-id", role: "admin" };
    mockUserModel.findOneAndUpdate.mockResolvedValue(updatedUser as any);

    const result = await updateUserRole!({}, { input }, adminContext, info);

    expect(mockUserModel.findOne).toHaveBeenCalledWith({
      _id: "admin-id",
      websiteId: "website-1",
    });
    expect(mockUserModel.findOneAndUpdate).toHaveBeenCalledWith(
      { _id: "target-id", websiteId: "website-1" },
      { role: "admin" },
      { new: true },
    );
    expect(result).toEqual(updatedUser);
  });

  it("should reject unauthenticated callers", async () => {
    const anonContext: Context = { userId: null, websiteId: null, role: null };

    await expect(
      updateUserRole!({}, { input }, anonContext, info),
    ).rejects.toThrow("Must be logged in");

    expect(mockUserModel.findOneAndUpdate).not.toHaveBeenCalled();
  });

  it("should reject non-admin callers", async () => {
    mockUserModel.findOne.mockResolvedValue({
      _id: "admin-id",
      role: "user",
    } as any);

    await expect(
      updateUserRole!({}, { input }, adminContext, info),
    ).rejects.toThrow("Only admins can change user roles");

    expect(mockUserModel.findOneAndUpdate).not.toHaveBeenCalled();
  });

  it("should reject invalid roles", async () => {
    await expect(
      updateUserRole!(
        {},
        { input: { userId: "target-id", role: "superadmin" } },
        adminContext,
        info,
      ),
    ).rejects.toThrow("Role must be one of");

    expect(mockUserModel.findOneAndUpdate).not.toHaveBeenCalled();
  });

  it("should throw when the target user is not found", async () => {
    mockUserModel.findOneAndUpdate.mockResolvedValue(null);

    await expect(
      updateUserRole!({}, { input }, adminContext, info),
    ).rejects.toThrow("User not found");
  });
});
