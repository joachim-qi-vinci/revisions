const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/questions.json');
const jsonDbPath2 = path.join(__dirname, '/../data/games.json');

function getQuestionsLevel(level) {
  const byLevel = level || undefined;
  const questions = parse(jsonDbPath);
  let questionsFiltered;
  if (byLevel) {
    const filteredQuestions = questions.filter((question) => question.level === byLevel);
    questionsFiltered = getRandomQuestions(filteredQuestions);
  } else if (!byLevel) {
    questionsFiltered = getRandomQuestions(questions);
  }
  return questionsFiltered;
}

function getRandomQuestions(listQuestions) {
  const randomQuestions = listQuestions.sort(() => Math.random() - 0.5).slice(0, 3);
  return randomQuestions;
}

function createOneStat(username, score) {
  const games = parse(jsonDbPath2);
  const createdStat = {
    username: escape(username),
    score: escape(score),
    date: Date.now(),
  };

  games.push(createdStat);
  serialize(jsonDbPath2, games);
  return createdStat;
}

module.exports = { getQuestionsLevel, createOneStat };
