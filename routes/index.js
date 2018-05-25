const express = require('express');
const router = express.Router();

const citiesController = require('../controllers/cities.controller');
const questsController = require('../controllers/quests.controller');
const usersController = require('../controllers/users.controller');
const authCheck = require('../middleware/authCheck');

//city
router.get('/cities', citiesController.getCities);
router.get('/cities/:id', citiesController.getCity);
router.post('/cities', citiesController.createCity);
router.patch('/cities/:id', citiesController.patchCity);
router.delete('/cities/:id', citiesController.deleteCity);

//quest
router.get('/quests', questsController.getQuests);
router.get('/quests/:id', questsController.getQuest);
router.post('/quests', authCheck, questsController.createQuest);
router.patch('/quests/:id', authCheck, questsController.patchQuest);
router.delete('/quests/:id', questsController.deleteQuest);

//user
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUser);
router.get('/users/data/rating', usersController.getRating);
router.get('/users/data/place', usersController.currPlace);
router.get('/users/data/profile', authCheck, usersController.getProfile);
router.post('/users/signup', usersController.createUser);
router.post('/users/signin', usersController.authUser);
router.patch('/users/:id', usersController.patchUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
