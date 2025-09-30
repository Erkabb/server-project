import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '@/schemas';
import { resolvers } from '@/resolvers';
import { NextRequest } from 'next/server';
import { connectToDb } from '@/utils/connect-to-db';
import { Context } from '@/types';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextResponse } from "next/server";
import cors from 'cors';
import express from 'express';

connectToDb();

const app = express();

app.use(cors({
  origin: process.env.VITE_API_BASE_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
}))


const server = new ApolloServer<Context>({
  resolvers,
  typeDefs,
  introspection: true,
});

const handler=startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: async (req) => {
    const token = req.headers.get('authorization') || '';
    const website = req.headers.get('x-website') || req.headers.get('website') || null;

    let userId: null;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
      userId = decoded.id;
    } catch {
      userId = null;
    }

    return {
      userId,
      website,
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
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Access-Control-Allow-Credentials", "true");
  return response;
}

export async function POST(request: NextRequest) {
  const response = await handler(request);
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Access-Control-Allow-Credentials", "true");
  return response;
}
