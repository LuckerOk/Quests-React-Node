const City = require('../models/cities');

function getCities(req, res, next) {
  City.find()
    .exec(function(err, cities) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: cities
      });
    });
}

function getCity(req, res, next) {
  City.findById(req.params.id)
    .exec(function (err, city) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: city
      });
    });
}

function createCity(req, res, next) {
  let city = new City({
    title: req.body.title
  });
  city.save(function (err, result) {
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

function patchCity(req, res, next) {
  City.findById(req.params.id, function(err, city) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!city) {
      return res.status(500).json({
        title: 'No City Found!',
        error: {city: 'City not found'}
      });
    }
    city.title = req.body.title;
    city.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: result
      });
    });
  });
}

function deleteCity(req, res, next) {
  City.findById(req.params.id, function (err, city) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!city) {
      return res.status(500).json({
        title: 'No City Found!',
        error: {city: 'City not found'}
      });
    }
    city.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: result
      });
    });
  });
}

module.exports = {
  getCities: getCities,
  getCity: getCity,
  createCity: createCity,
  patchCity: patchCity,
  deleteCity: deleteCity
};
