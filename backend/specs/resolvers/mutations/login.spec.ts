import { login } from "../../../src/resolvers/mutations";
import { GraphQLResolveInfo } from "graphql";
import User from "../../../src/models/auth.model";
import bcrypt from "bcrypt";
import { Context } from "../../../src/types";

jest.mock("../../../src/models/auth.model", () => ({
  __esModule: true,
  default: {
    findOne: jest.fn(),
  },
}));

jest.mock("bcrypt", () => ({
  compareSync: jest.fn(),
}));

jest.mock("../../../src/utils/generate-token", () => ({
  generateToken: jest.fn().mockReturnValue("token"),
}));

const mockUserModel = User as jest.Mocked<typeof User>;
const mockBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;

const context: Context = { userId: null, websiteId: null, role: null };
const info = {} as GraphQLResolveInfo;

const input = {
  email: "test@example.com",
  password: "password123",
  websiteId: "website-1",
};

describe("login Resolver", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should login with valid credentials", async () => {
    const user = {
      _id: "1",
      email: input.email,
      password: "hashed",
      websiteId: "website-1",
      role: "user",
    };
    mockUserModel.findOne.mockResolvedValue(user as any);
    (mockBcrypt.compareSync as jest.Mock).mockReturnValue(true);

    const res = await login!({}, { input }, context, info);

    expect(mockUserModel.findOne).toHaveBeenCalledWith({
      email: input.email,
      websiteId: input.websiteId,
    });
    expect(res).toEqual({ user, token: "token" });
  });

  it("should not login when user is not found", async () => {
    mockUserModel.findOne.mockResolvedValue(null);

    await expect(login!({}, { input }, context, info)).rejects.toThrow(
      "Email or password is incorrect",
    );
  });

  it("should not login with wrong password", async () => {
    mockUserModel.findOne.mockResolvedValue({
      _id: "1",
      password: "hashed",
      websiteId: "website-1",
      role: "user",
    } as any);
    (mockBcrypt.compareSync as jest.Mock).mockReturnValue(false);

    await expect(login!({}, { input }, context, info)).rejects.toThrow(
      "Email or password is incorrect",
    );
  });
});
