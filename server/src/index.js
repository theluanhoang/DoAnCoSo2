const express = require('express')
const route = require('./routes')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')

// Connect with database
const db = require('./config/db')

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(morgan('combined'))
app.use(cors())
app.use(cookieParser());


route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
