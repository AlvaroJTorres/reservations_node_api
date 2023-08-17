import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ["customer", "admin", "manager"],
    default: "customer"
  },
  restaurant : {
    type: Schema.Types.ObjectId,
    ref: "Restaurant"
  }
})

export const User = mongoose.model("User", userSchema);