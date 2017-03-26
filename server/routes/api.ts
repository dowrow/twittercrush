const apicache = require('apicache');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Twitter = require('twitter');
const PositiveVote = require('../models/positive-vote.ts');
const NegativeVote = require('../models/negative-vote.ts');
const cache = apicache.middleware;

function getTwitterClient(accessToken, accessTokenSecret) {
  return new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: accessToken,
    access_token_secret: accessTokenSecret
  });
}

// API root
router.get('/', (req, res) => {
  res.send('API is up and running');
});

// Get twitter followers
router.get('/followers', cache('15 minutes'), (req, res) => {
  let twitterClient = getTwitterClient(req.query.access_token, req.query.access_token_secret);
  let cursor = req.query.cursor || -1;
  let params = {
    count: 200,
    include_user_entities: true,
    cursor: cursor
  };
  twitterClient.get('followers/list', params, (error, data) => res.status(200).json(data));
});

router.get('/friends', cache('15 minutes'), (req, res) => {
  let twitterClient = getTwitterClient(req.query.access_token, req.query.access_token_secret);
  let cursor = req.query.cursor || -1;
  let params = {
    count: 200,
    include_user_entities: true,
    cursor: cursor
  };
  twitterClient.get('friends/list', params, (error, data) => res.status(200).json(data));
});

router.get('/users/:uid', (req, res) => {
  let uid = req.params.uid;
  PositiveVote.count({ rated: uid }, function(err, count){
      let positiveVotes = count;
      NegativeVote.count({ rated: uid }, function(err, count){
        let negativeVotes = count;
        let totalVotes = positiveVotes + negativeVotes;
        let rating = 4;
        if (positiveVotes > 0 || negativeVotes > 0) {
          rating = 5 * (positiveVotes / (positiveVotes + negativeVotes));
        }
        res.status(200).json({
          rating: rating,
          total_votes: totalVotes
        });
      });
  });
});

router.post('/positive-votes', (req, res) => {
  let positiveVote = new PositiveVote({
    voter: req.body.voter,
    rated: req.body.rated
  });
  positiveVote.save((err) => {
    if (err) throw err;
    res.status(201).json(positiveVote);
  });
});

router.post('/negative-votes', (req, res) => {
  let negativeVote = new NegativeVote({
    voter: req.body.voter,
    rated: req.body.rated
  });
  negativeVote.save((err) => {
    if (err) throw err;
    res.status(201).json(negativeVote);
  });
});

module.exports = router;
