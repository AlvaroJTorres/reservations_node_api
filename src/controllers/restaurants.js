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

export const update = async (req, res) => {
  const {name, address, manager} = req.body
  const id = req.params.id

  const restaurant = await Restaurant.findByIdAndUpdate(id, {name, address, manager}, {new: true})

  if(!restaurant) return res.status(404).send(`The User with id ${id} was not found`)

  res.send(restaurant)
};

export const destroy = async (req, res) => {
  const id = req.params.id
  try {
    await Restaurant.findByIdAndDelete(id)
    res.status(204).send(null)
  } catch(e) {
    res.send(e)
  }  
};