require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', function (req, res) {
	res.send('landing page add /api/workouts for workout and login/signup  /api/user after the URl');
});
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
// connect to db
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://javedansari:javed1993@cluster0.lqey4nb.mongodb.net/workout-auth")
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT || 4000)
    })
  })
  .catch((error) => {
    console.log(error)
  })