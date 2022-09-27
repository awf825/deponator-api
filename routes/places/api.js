const PlaceModel = require("../../models/place.js")

module.exports = {
  createNewPlace: function(name, callback) {
    const newPlace = new PlaceModel({
      name: name,
      food: "62adef61fb9e94ae66d211cd"
    })

    newPlace.save(function(error, newItem) {
      if (error) {
        callback({error: true})
      } else {
        callback({success: true})
      }
    })
  },

  getPlacesByFood: function(id, callback) {
    PlaceModel.find({food: id}).lean().exec(function(error, places) {
      if (error) {
        callback({error: true})
      } else {
        callback({success: true, places: places})
      }
    })
  },
}