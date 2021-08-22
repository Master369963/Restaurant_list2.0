const Restaurant = require('../restaurant')

const db = ('../../config/mongoose')

db.once('open', () => {
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
  })
  console.log('data added!')
})