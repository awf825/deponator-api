const mongoose = require("mongoose")

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  calories: {
    type: Number
  },
  description: {
    type: String
  },
  places: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place"
  }]
})

FoodSchema.index({name: 1}, {unique: true})

module.exports = mongoose.model("Food", FoodSchema)