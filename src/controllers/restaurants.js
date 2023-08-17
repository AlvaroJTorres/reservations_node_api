import { Restaurant } from "../models/restaurants.js";

export const index = async (req, res) => {
  const restaurants = await Restaurant.find();
  res.send(restaurants)
};

export const create = async (req, res) => {
  const {name, address, manager} = req.body

  const newRestaurant = new Restaurant({name, address, manager})

  try {
    await newRestaurant.save()
    res.send(newRestaurant)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
};

export const show = async (req, res) => {
  const id = req.params.id
  const restaurant = await Restaurant.findById(id)
  res.send(restaurant)
};
