const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express();

// mongoose
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URL, dbOptions, (err) => {
  if (err) {
    console.log('not connected')
  } else {
    console.log('connected ✅')
  }
})

app.use(cors())

app.use(morgan('dev'))

// passport
// const passport = require('./initializers/passport')
// app.use(passport.initialize())
// app.use(passport.session())

// require all routes
app.use(require('./routes'))

app.listen(PORT, () => console.log('listening on port 5000'))