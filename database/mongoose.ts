import mongoose from 'mongoose';
import { buffer } from 'stream/consumers';

const momgoDbUri = process.env.MONGODB_URI;

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  }
}

let cached = global.mongooseCache ;
if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if(!momgoDbUri) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(momgoDbUri, {bufferCommands: false})
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  console.log(`Connected to MongoDB: ${process.env.NODE_ENV}, URI: ${momgoDbUri}`);
}
