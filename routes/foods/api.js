const FoodModel = require("../../models/food.js")

module.exports = {
  createNewFood: function(name, calories, description, callback) {
    const newFood = new FoodModel({
      name: name,
      calories: calories,
      description: description
    })

    newFood.save(function(error, newItem) {
      if (error) {
        callback({error: true})
      } else {
        callback({success: true})
      }
    })
  },

  getAllFoods: function(callback) {
    FoodModel.find({}).lean().exec(function(error, foods) {
      if (error) {
        callback({error: true})
      } else {
        callback({success: true, foods: foods})
      }
    })
  },

  changeFoodDescription: function(name, newDescription, callback) {
    FoodModel.findOne({name: name}).exec(function(error, food) {
      if (error) {
        callback({error: true})
      } else if (!food) {
        callback({notFoundError: true})
      } else {
        food.description = newDescription
  
        food.save(function(error) {
          if (error) {
            callback({error: true})
          } else {
            callback({success: true})
          }
        })
      }
    })
  },

  deleteFood: function(name, callback) {
    FoodModel.findOne({name: name}).exec(function(error, food) {
      if (error) {
        callback({error: true})
      } else if (!food) {
        callback({notFoundError: true})
      } else {
        food.remove(function(error) {
          if (error) {
            callback({error: true})
          } else {
            callback({success: true})
          }
        })
      }
    })
  }
}