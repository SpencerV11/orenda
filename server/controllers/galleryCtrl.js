module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_gallery()
        .then(gallery => res.status(200).send(gallery))
        .catch(error => console.log(error))
    },
    
    create: (req, res) => {
        let { url, description, gallery_service_title } = req.body
        let before_after_img = url
        let db = req.app.get('db')
        db.create_gallery([ before_after_img, description, gallery_service_title ])
        .then((gallery) => res.status(200).send(gallery))
        .catch(error => console.log(error))
    },

    delete: (req, res) => {
        let { gallery_id } = req.params
        let db = req.app.get('db')
        db.delete_gallery([gallery_id])
        .then(gallery => res.status(200).send(gallery))
        .catch(error => console.log(error))
    }
}