const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/users');

function getUsers(req, res, next) {
  User.find()
    .exec(function(err, users) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: users
      });
    });
}

function getUser(req, res, next) {
  User.findById(req.params.id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: user
      });
    });
}

function getRating(req, res, next) {
  User.find()
    .exec(function(err, users) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      let topUsers = users.sort((curr, next) => next.score - curr.score)
        .slice(0, 10);
      let data = topUsers.map((user, index) => {
        user.place = index + 1;
        return ({
          id: user._id,
          username: user.username,
          firstName: user.firstName,
          score: user.score,
          place: user.place
        })
      });
      res.status(200).json({
        data
      });
    });
}

function currPlace(req, res, next) {
  User.find()
    .exec(function(err, users) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      let topUsers = users.sort((curr, next) => next.score - curr.score);

      let decoded = jwt.decode(req.headers['x-access-token']);
      User.findById(decoded.user._id)
        .exec(function (err, user) {
          if (err) {
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }

          user.place = topUsers.findIndex(x => x.username === user.username) + 1;

          user.save(function(err, result) {
            if (err) {
              return res.status(500).json({
                title: 'An error occurred',
                error: err
              });
            }
            res.status(200).json({
              data: {
                firstName: result.firstName,
                place: result.place
              }
            });
          });
        });
    });
}

function getProfile(req, res, next) {
  let decoded = jwt.decode(req.headers['x-access-token']);
  User.findById(decoded.user._id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: {
          id: user._id,
          firstName: user.firstName,
          username: user.username
        }
      });
    });
}

function createUser(req, res, next) {
  let user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    firstName: req.body.firstName,
    score: 0,
    place: null
  });
  user.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      data: result
    });
  });
}

function authUser(req, res, next) {
  User.findOne({username: req.body.username}, function(err, user) {
    if (err) {
      return res.status(401).json({
        title: 'Username failed',
        error: {message: 'Invalid username credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Password failed',
        error: {message: 'Invalid password credentials'}
      });
    }
    let token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      token: token,
      userId: user._id
    });
  });
}

function patchUser(req, res, next) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      if (!user) {
        return res.status(500).json({
          title: 'No User Found!',
          error: 'User not found'
        });
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 10);

        user.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }
          res.status(200).json({
            data: {
              id: result._id,
              firstName: result.firstName,
              username: result.username
            }
          });
        });
      }
      if (req.body.firstName) {
        user.firstName = req.body.firstName;

        user.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }
          res.status(200).json({
            data: {
              id: result._id,
              firstName: result.firstName,
              username: result.username
            }
          });
        });
      }
    });
}

function deleteUser(req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      if (!user) {
        return res.status(500).json({
          title: 'No User Found!',
          error: {post: 'User not found'}
        });
      }
      else {
        res.status(200).json({
          data: user
        });
      }
    });
}

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  getRating: getRating,
  currPlace: currPlace,
  getProfile: getProfile,
  createUser: createUser,
  authUser: authUser,
  patchUser: patchUser,
  deleteUser: deleteUser
};
