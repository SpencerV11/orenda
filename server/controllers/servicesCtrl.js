module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_services()
        .then(services => res.status(200).send(services))
        .catch(error => console.log(error))
    },

    create: (req, res) => {
        let { time_limit, service_cost, service_title, service_desc } = req.body
        let db = req.app.get('db')
        db.create_service([service_title, service_desc, time_limit, service_cost])
        .then((services) => res.status(200).send(services))
    },

    delete: (req, res) => {
        let { service_id } = req.params
        let db = req.app.get('db')
        db.delete_service([service_id])
        .then((services) => res.status(200).send(services))
    }
}