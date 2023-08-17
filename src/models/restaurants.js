import mongoose, { Schema } from "mongoose";

const restaurantSchema = new Schema({
  name: {
    type: String,
    required : true
  },
  address: {
    type: String,
    required: true
  },
  manager: { 
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);