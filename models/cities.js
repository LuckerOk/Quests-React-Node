const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quest = require('./quests');

const citySchema = new Schema({
  title: { type: String, require: true },
  quests: [{ type: Schema.Types.ObjectId, ref: 'Quest'}]
});

module.exports = mongoose.model('City', citySchema);