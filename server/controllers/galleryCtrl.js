module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_gallery()
        .then(gallery => res.status(200).send(gallery))
        .catch(error => console.log(error))
    },
    
    create: (req, res) => {
        let { before_img, after_img, description, gallery_service_title } = req.body
        let db = req.app.get('db')
        db.create_gallery([ before_img, after_img, description, gallery_service_title ])
        .then((gallery) => res.status(200).send(gallery))
        .catch(error => console.log(error))
    }
}