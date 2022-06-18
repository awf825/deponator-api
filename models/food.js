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
  }
})

FoodSchema.index({name: 1}, {unique: true})

module.exports = mongoose.model("Food", FoodSchema)