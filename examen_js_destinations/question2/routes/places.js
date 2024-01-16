/* eslint-disable max-len */

const express = require('express');

const { createPlace, createUser, likePlace } = require('../models/places');

const router = express.Router();

router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  if (!name || !description) return res.sendStatus(400); // error code '400 Bad request'
  if (name?.length === 0 || description?.length === 0) return res.sendStatus(400); // error code '400 Bad request'
  const createdPlace = createPlace(name, description);

  return res.json(createdPlace);
});

router.post('/user', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const mail = req?.body?.mail?.length !== 0 ? req.body.mail : undefined;

  if (!name || !mail) return res.sendStatus(400); // error code '400 Bad request'
  if (name?.length === 0 || mail?.length === 0) return res.sendStatus(400); // error code '400 Bad request'
  const createdUser = createUser(name, mail);
  return res.json(createdUser);
});

router.post('/like', (req, res) => {
  const idUser = req?.body?.idUser?.length !== 0 ? req.body.idUser : undefined;
  const idPlace = req?.body?.idPlace?.length !== 0 ? req.body.idPlace : undefined;

  if (!idUser || !idPlace) return res.sendStatus(400); // error code '400 Bad request'
  if (idUser < 0 || idPlace < 0) return res.sendStatus(400); // error code '400 Bad request'

  likePlace(idUser, idPlace);

  return res.sendStatus(200);
});

module.exports = router;
