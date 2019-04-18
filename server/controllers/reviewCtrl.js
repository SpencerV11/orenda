module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_reviews()
        .then(products => res.status(200).send(products))
        .catch(error => console.log(error))
    },

    create: (req, res) => {
        let {description, rating } = req.body
        console.log(req.session.user)
        let { review_client_id } = req.session.user
        let db = req.app.get('db')
        db.create_review([review_client_id, description, rating])
        .then(() => res.status(200).send('You created a review'))
        .catch(error => console.log(error))
    }
}