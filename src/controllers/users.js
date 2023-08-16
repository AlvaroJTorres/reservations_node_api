import { User } from "../models/users.js";

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
    res.json(newUser)
  } catch (e) {
    console.error(e)
    res.json(e)
  }
};

export const show = async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id)
  res.send(user)
};
