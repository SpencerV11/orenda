require('dotenv').config()
let express = require('express')
let session = require('express-session')
let massive = require('massive')
let authCtrl = require('./controllers/authCtrl')
let reviewCtrl = require('./controllers/reviewCtrl')
let promoCtrl = require('./controllers/promoCtrl')
let servicesCtrl = require('./controllers/servicesCtrl')
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

// app.use((req, res, next) => {
//     if(!req.session.user) {
//         req.session.user = {
//             client_id: 1,
//             firstName: "Jimmy",
//             lastName: "Joseph",
//             email: "JJ12@gmail.com"
//         }
//     }
//     next()
// })

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/client-data', authCtrl.clientData)
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('http://localhost:3000/#/')
})

app.get('/api/reviews', reviewCtrl.display)
app.post('/api/review', reviewCtrl.create)
app.delete('/api/reviews/:review_id', reviewCtrl.delete)
app.put('/api/reviews/:review_id', reviewCtrl.update)

app.get('/api/promotions', promoCtrl.display)

app.get('/api/services', servicesCtrl.display)
app.post('/api/service', servicesCtrl.create)
app.delete('/api/services/:service_id', servicesCtrl.delete)
app.put('/api/services/:service_id', servicesCtrl.update)