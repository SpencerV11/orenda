require('dotenv').config()
let { ACCOUNT_SID, TWILIO_NUMBER, AUTHTOKEN } = process.env
const me = require('twilio')(ACCOUNT_SID, AUTHTOKEN)

module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_reviews()
        .then(products => res.status(200).send(products))
        .catch(error => console.log(error))
    },

    create: async (req, res) => {
        let {description, rating } = req.body
        console.log(req.session.user)
        let { client_id, firstName, lastName } = req.session.user
        let db = req.app.get('db')
        let createReview = await db.create_review([ client_id, description, rating ])
        res.status(200).send(createReview)
        me.messages.create({
            to: '+18018360956',
            from: TWILIO_NUMBER,
            body: `${firstName} ${lastName} posted a review for you!`
        })
        .then((message) => console.log(message.sid))
    },
    
    delete: async (req, res) => {
        let { review_id } = req.params
        let db = req.app.get('db')
        const review = await db.delete_review([review_id])
        res.status(200).send(review)
    },
    
    update: (req, res) => {
        let { review_id } = req.params
        let { editDesc, editRating } = req.body
        let db = req.app.get('db')
        db.update_review([review_id, editDesc, editRating])
        .then((reviews) => {
            console.log(reviews)
            res.status(200).send(reviews)
        }) 
        .catch(error => console.log(error))
    }
}