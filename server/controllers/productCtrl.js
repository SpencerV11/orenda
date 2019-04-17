module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_products()
        .then(products => res.status(200).send(products))
        .catch(error => console.log(error))
    }
}