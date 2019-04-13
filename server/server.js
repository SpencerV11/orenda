require('dotenv').config()
let express = require('express')
let session = require('express-session')
let massive = require('massive')
let authCtrl = require('./controllers/authCtrl')
let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

let app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))
    console.log('DB SET')
})

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.post('/auth/register', authCtrl.register)