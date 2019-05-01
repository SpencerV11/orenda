require('dotenv').config()
let express = require('express')
let session = require('express-session')
let massive = require('massive')
let authCtrl = require('./controllers/authCtrl')
let reviewCtrl = require('./controllers/reviewCtrl')
let promoCtrl = require('./controllers/promoCtrl')
let servicesCtrl = require('./controllers/servicesCtrl')
let galleryCtrl = require('./controllers/galleryCtrl')
let s3Ctrl = require('./controllers/s3Ctrl')
let productsCtrl = require('./controllers/productsCtrl')
let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, REACT_APP_REDIRECT } = process.env

let app = express()

app.use( express.static( `${__dirname}/../build` ) );
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

app.get('/api/signs-s3', s3Ctrl.get)

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/client-data', authCtrl.clientData)
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
})

app.get('/api/reviews', reviewCtrl.display)
app.post('/api/review', reviewCtrl.create)
app.delete('/api/reviews/:review_id', reviewCtrl.delete)
app.put('/api/reviews/:review_id', reviewCtrl.update)

app.get('/api/promotions', promoCtrl.display)
app.post('/api/promotion', promoCtrl.create)
app.delete('/api/promotion/:promotion_id', promoCtrl.delete)
app.put('/api/promotion/:promotion_id', promoCtrl.update)

app.get('/api/services', servicesCtrl.display)
app.post('/api/service', servicesCtrl.create)
app.delete('/api/services/:service_id', servicesCtrl.delete)
app.put('/api/services/:service_id', servicesCtrl.update)

app.get('/api/gallery', galleryCtrl.display)
app.post('/api/gallery', galleryCtrl.create)
app.delete('/api/gallery/:gallery_id', galleryCtrl.delete)

app.get('/api/products', productsCtrl.display)
app.post('/api/product', productsCtrl.create)
app.put('/api/products/:product_id', productsCtrl.update)
app.delete('/api/products/:product_id', productsCtrl.delete)