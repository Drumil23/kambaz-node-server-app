import db from "../Database/index.js";

let { users } = db;

export const createUser = (user) => {
  const newUser = { ...user, _id: Date.now().toString() };
  users.push(newUser);
  return newUser;
};

export const findAllUsers = () => users;

export const findUserById = (userId) => users.find((user) => user._id === userId);

export const findUserByUsername = (username) => users.find((user) => user.username === username);

export const findUserByCredentials = (username, password) =>
  users.find((user) => user.username === username && user.password === password);

export const updateUser = (userId, userUpdates) => {
  const user = users.find((user) => user._id === userId);
  Object.assign(user, userUpdates);
  return user;
};

export const deleteUser = (userId) => {
  users = users.filter((user) => user._id !== userId);
  db.users = users;
};

export const findUsersByRole = (role) => users.filter((user) => user.role === role);


