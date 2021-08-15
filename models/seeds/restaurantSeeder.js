const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const RestaurantList = require('../../restaurants.json').results
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  RestaurantList.results.forEach(restaurant => {
    Restaurant.create({
      name: restaurant.name,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      rating: restaurant.rating,
      description: restaurant.description,
      google_map: restaurant.google_map
    })
    console.log('data added!')
  })
})