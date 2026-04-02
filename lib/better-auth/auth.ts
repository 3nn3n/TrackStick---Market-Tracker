import { betterAuth, BetterAuthOptions } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (authInstance) {
    return authInstance;
  }

  const mongooseConnection = await connectToDatabase();
  const db = mongooseConnection.connection.db;

  if (!db) {
    throw new Error("Failed to get MongoDB database instance");
  }
  
  const config: BetterAuthOptions = {
    database:  mongodbAdapter(db as any),
    secret: process.env.BETTER_AUTH_SECRET as string,
    baseURL: process.env.BETTER_AUTH_URL as string,
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      autoSignIn: true,
    },
    plugins: [nextCookies()]
  };
  authInstance = betterAuth(config);
  return authInstance;

}

export const auth = await getAuth();