const express = require("express")
const api = require("./api.js")
const app = express.Router()

// API ENDPOINT CODE WILL GO HERE
app.post("/foods/create-new-food", function(request, response) {
    if (!request.body.name || !request.body.calories || !request.body.description) {
      response.json({error: true})
    } else {
      api.createNewFood(request.body.name, request.body.calories, request.body.description, function(result) {
        response.json(result)
      })
    }
})

app.get("/foods/get-all-foods", function(request, response) {
    api.getAllFoods(function(result) {
      response.json(result)
    })
})

app.put("/foods/change-food-description", function(request, response) {
    if (!request.body.name || !request.body.newDescription) {
      response.json({error: true})
    } else {
      api.changeFoodDescription(request.body.name, request.body.newDescription, function(result) {
        response.json(result)
      })
    }
})

app.delete("/foods/delete-food", function(request, response) {
    if (!request.body.name) {
      response.json({error: true})
    } else {
      api.deleteFood(request.body.name, function(result) {
        response.json(result)
      })
    }
})

module.exports = app