const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/places.json');
const jsonDbPathUsers = path.join(__dirname, '/../data/users.json');
const jsonDbPathLikes = path.join(__dirname, '/../data/likes.json');

function createPlace(name, description) {
  const places = parse(jsonDbPath);
  const createdPlace = {
    name: name.trim(),
    description: description.trim(),
  };

  places.push(createdPlace);
  serialize(jsonDbPath, places);
  return createdPlace;
}

function createUser(name, mail) {
  const users = parse(jsonDbPathUsers);

  const createdUser = {
    id: users.length + 1,
    name: name.trim(),
    mail: mail.trim(),
  };

  if (users.find((user) => user.name === createdUser.name)) throw new Error('User already exists');

  users.push(createdUser);
  serialize(jsonDbPathUsers, users);
  return createdUser;
}

function likePlace(idUser, idPlace) {
  const likes = parse(jsonDbPathLikes);
  const places = parse(jsonDbPath);
  const users = parse(jsonDbPathUsers);
  if (!users.find((user) => user.id === idUser) === undefined) throw new Error('User does not exist');
  if (!places.find((place) => place.id === idPlace) === undefined) throw new Error('Place does not exist');

  const createdLike = {
    idUser,
    idPlace,
  };

  if (likes.find((like) => like.idUser === createdLike.idUser && like.idPlace === createdLike.idPlace)) throw new Error('Like already exists');
  likes.push(createdLike);
  serialize(jsonDbPathLikes, likes);
  return createdLike;
}
module.exports = { createPlace, createUser, likePlace };
