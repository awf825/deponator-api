const mongoose = require("mongoose")

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food"
  }
})

PlaceSchema.index({name: 1}, {unique: true})

module.exports = mongoose.model("Place", PlaceSchema)