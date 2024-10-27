const mongoose = require("mongoose");
const validator = require("validator");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, " A tour must have a name"],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficult"],
    enum: {
      values: ["easy", "medium", "difficult"],
      message: "Difficulty is either:easy,medium,difficult",
    },
  },
  price: {
    type: Number,
    // required: [true, "A tour mus have a price"],
  },
  priseDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    trim: true,
    // required: [true, "A tour must have a description"],
  },
  descripion: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    // required: [true, "A tour must have a cover image"],
  },
  images: [String],
  cratedAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
  secretTour: {
    type: Boolean,
    default: false,
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
