const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    DB_MONGOU_RL: process.env.DB_MONGO_URL
}