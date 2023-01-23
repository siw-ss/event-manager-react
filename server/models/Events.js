const mongoose = require("mongoose");
const DateOnly = require('mongoose-dateonly')(mongoose);

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  date: {
    type: DateOnly,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const EventModel = new mongoose.model("events", EventSchema);
module.exports = EventModel;
