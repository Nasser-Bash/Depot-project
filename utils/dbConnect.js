import mongoose from 'mongoose';

export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected!');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}