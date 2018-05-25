const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = require('./cities');

const questSchema = new Schema({
  title: { type: String, require: true },
  point: {
    latitude: { type: Number, require: true },
    longitude: { type: Number, require: true }
  },
  type: { type: String, require: true },
  shortDescription: { type: String, require: true },
  fullDescription: { type: String, require: true },
  score: { type: Number, require: true },
  active: { type: Boolean},
  complete: { type: Boolean},
  city: { type: Schema.Types.ObjectId, ref: 'City' },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

questSchema.post('remove', function (quest) {
  City.findbyId(quest.city, function (err, city) {
    city.quests.pull(quest);
    city.save();
  })
});

module.exports = mongoose.model('Quest', questSchema);