import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}reservations_api_development?retryWrites=true&w=majority`;

export default async function connectDB() {
  try {
    const DB = await mongoose.connect(uri);
    console.log(`You successfully connected to ${DB.connection.name} database`);
  } catch (e) {
    console.log(e);
  }
}