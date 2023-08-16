import { User } from "../models/user.js";

let users = [];

export const index = async (req, res) => {
  const users = await User.find();
  res.send(users);
}

export const create = async (req, res) => {
  const {name, email, role} = req.body

  const newUser = new User({name, email, role})

  try {
    await newUser.save()
    res.send(newUser)
  } catch (e) {
    console.error(e)
    res.send(e)
  }
};

export const show = async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id)
  res.send(user)
};

export const update = async (req, res) => {
  const {name, email, role} = req.body
  const id = req.params.id

  const user = await User.findByIdAndUpdate(id, {name, email, role}, {new: true})

  if(!user) return res.status(404).send(`The User with id ${id} was not found`)

  res.send(user)
};

export const destroy = async (req, res) => {
  const id = req.params.id
  try {
    await User.findByIdAndDelete(id)
    res.status(204).send(null)
  } catch(e) {
    res.send(e)
  }  
};
