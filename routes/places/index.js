const express = require("express")
const api = require("./api.js")
const app = express.Router()

// API ENDPOINT CODE WILL GO HERE
app.post("/places/create-new-place", function(request, response) {
    if (!request.body.name) {
      response.json({error: true})
    } else {
      api.createNewPlace(request.body.name, function(result) {
        response.json(result)
      })
    }
})

app.get("/places/get-places-by-food", function(request, response) {
    api.getPlacesByFood(function(result) {
        response.json(result)
    })
})

module.exports = app