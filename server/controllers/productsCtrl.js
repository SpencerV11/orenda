module.exports = {
    display: (req, res) => {
        let db = req.app.get('db')
        db.get_products()
        .then(products => res.status(200).send(products))
        .catch(error => console.log(error))
    },

    create: (req, res) => {
        let db = req.app.get('db')
        let { product_line, product_desc, url } = req.body
        db.create_product([product_line, product_desc, url])
        .then(products => res.status(200).send(products))
        .catch(error => console.log(`Your error is right here ===> ${error}`))
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let { product_id } = req.params
        let { product_line, product_desc, product_img } = req.body
        db.update_product([product_id, product_line, product_desc, product_img])
        .then(products => res.send(products))
        .catch(error => console.log(error))
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let { product_id } = req.params
        db.delete_product([product_id])
        .then(products => res.status(200).send(products))
        .catch(error => console.log(error))
    }
}