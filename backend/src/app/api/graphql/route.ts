import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/schemas";
import { resolvers } from "@/resolvers";
import { NextRequest } from "next/server";
import { connectToDb } from "@/utils/connect-to-db";
import { Context } from "@/types";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
import cors from "cors";
import express from "express";

connectToDb();

const app = express();

app.use(
  cors({
    origin: process.env.VITE_API_BASE_URL,
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

const server = new ApolloServer<Context>({
  resolvers,
  typeDefs,
  introspection: true,
});

const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: async (req) => {
    const token = req.headers.get("authorization") || "";
    const websiteToken = req.headers.get("x-website") || "";
    let userId: null;
    let websiteId: string | null = null;
    let role: string | null = null;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
      if (decoded.websiteId) websiteId = decoded.websiteId;

      userId = decoded.userId; // must match your JWT payload keys
      role = decoded.role;
    } catch {
      userId = null;
    }

    if (!websiteId && websiteToken) {
      const decodedWebsite = jwt.verify(
        websiteToken,
        process.env.JWT_SECRET!,
      ) as JwtPayload;
      websiteId = decodedWebsite.websiteId;
    }

    return {
      userId,
      websiteId,
      role,
    };
  },
});

export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function GET(request: NextRequest) {
  const response = await handler(request);
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");
  return response;
}

export async function POST(request: NextRequest) {
  const response = await handler(request);
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");
  return response;
}
