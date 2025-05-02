import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

 export const connectToDb = async () => {
  try {
    const uri = 'mongodb+srv://erkabb816:e9akbII4e04xtb3Y@cluster0.2ji91.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/ecommerce';
    if (!uri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }
    await mongoose.connect(uri);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
