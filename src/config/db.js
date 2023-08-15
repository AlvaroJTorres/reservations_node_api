import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}?retryWrites=true&w=majority`;

export default async function connectDB() {
  try {
    const DB = await mongoose.connect(uri);
    console.log("Conexión de forma satisfactoria", DB.connection.name);
  } catch (e) {
    console.log(e);
  }
}