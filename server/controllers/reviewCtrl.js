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
        let { client_id } = req.session.user
        let db = req.app.get('db')
        db.create_review([ client_id, description, rating ])
        .then((reviews) => res.status(200).send(reviews))
        .catch(error => console.log(error))
    },
    
    delete: async (req, res) => {
        let { review_id } = req.params
        let db = req.app.get('db')
        const review = await db.delete_review([review_id])
        res.status(200).send(review)
    },
    
    update: (req, res) => {
        let { review_id } = req.params
        let { description, rating } = req.body
        let db = req.app.get('db')
        db.update_review([review_id, description, rating])
        .then((reviews) => res.status(200).send(reviews))
        .catch(error => console.log(error))
    }
}