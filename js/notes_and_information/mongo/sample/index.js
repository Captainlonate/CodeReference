import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// ==============================================

dotenv.config({ path: './development.env' })

const CONFIG = {
  listen: {
    port: 1337
  },
  db: {
    // connectionString: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`
    connectionString: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
  }
}

let dbConn = null

// ==============================================

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A game must have a title.'],
    unique: true
  },
  price: {
    type: Number,
    required: [true, 'A game must have a price.']
  },
  year_released: {
    type: Number,
    default: 1900
  },
})

const GameModel = mongoose.model('Game', gameSchema)

mongoose.connect(CONFIG.db.connectionString, {
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then((connection) => {
  dbConn = connection
  console.log('DB Connected!')
}).catch((err) => {
  console.log('Error connecting to MongoDB', err?.message)
  process.exit(1)
})

const app = express()

// parse application/json
app.use(express.json())

app.get('/api/games', (req, res) => {
  res.json({
    data: {
      games: []
    },
    error: null
  })
})

// ==============================================

app.listen(CONFIG.listen.port, () => {
  console.log(`Listening on port ${CONFIG.listen.port}`)
})