module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_promo()
        .then(promos => res.status(200).send(promos))
        .catch(error => console.log(error))
    }
}