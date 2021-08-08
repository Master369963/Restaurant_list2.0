const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurants.json')

app.engine('handlebars', exphbs({ defultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurantID', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurantID)
  res.render('show', { restaurant })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)
  })

  if(restaurants.length === 0 ) {
    res.render('searchEmpty', { keyword: keyword })
  }
  res.render('index', { restaurants, keyword })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})