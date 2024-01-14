const express = require('express');
const { getQuestionsLevel, createOneStat } = require('../models/test');

const router = express.Router();

router.get('/start', (req, res) => {
  const questionsPotentiallyFiltered = getQuestionsLevel(req?.query?.level);
  if (!questionsPotentiallyFiltered) return res.sendStatus(404);
  return res.json(questionsPotentiallyFiltered);
});

router.post('/', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const score = req?.body?.score?.length !== 0 ? req.body.score : undefined;

  if (!username || !score) return res.sendStatus(400); // error code '400 Bad request'
  if (username?.length === 0) return res.sendStatus(400); // error code '400 Bad request'
  if (score > 3 || score < 0) return res.sendStatus(400); // error code '400 Bad request'
  const createdStats = createOneStat(username, score);

  return res.json(createdStats);
});

module.exports = router;
