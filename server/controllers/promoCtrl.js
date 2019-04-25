module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_promo()
        .then(promos => res.status(200).send(promos))
        .catch(error => console.log(error))
    },
    
    create: (req, res) => {
        let db = req.app.get('db')
        let { promotion_title, description, ex_date } = req.body
        db.create_promo([promotion_title, description, ex_date])
        .then(promos => res.status(200).send(promos))
        .catch(error => console.log(error))
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let { promotion_id } = req.params
        db.delete_promo([promotion_id])
        .then(promos => res.status(200).send(promos))
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let { promotion_id } = req.params
        let { promotion_title, description, ex_date } = req.body
        db.update_promo([promotion_id, promotion_title, description, ex_date])
        .then(promos => res.send(promos))
    }
}