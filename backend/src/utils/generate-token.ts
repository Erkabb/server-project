import jwt, { JwtPayload } from "jsonwebtoken";

export interface JWTPayloadUser {
  userId: string;
  websiteId: string;
  role?: string;
}

export const generateToken = (payload: JWTPayloadUser) => {
  if (!payload.userId) throw new Error("Missing userId in token payload");
  if (!payload.websiteId) throw new Error("Missing websiteId in token payload");

  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "6h",
  });
};

export const generateWebsiteToken = (payload: JwtPayload) => {
  return jwt.sign(
    { payload },
    process.env.JWT_SECRET!,
    { expiresIn: "180d" }, // 6 months
  );
};
