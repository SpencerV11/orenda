module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_services()
        .then(services => res.status(200).send(services))
        .catch(error => console.log(error))
    }
}