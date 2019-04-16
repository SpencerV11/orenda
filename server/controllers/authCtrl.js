let bcrypt = require('bcryptjs')

module.exports = {
   register: async (req, res) => {
       console.log('hi')
       const { first_name, last_name, email, password, phone_number, is_admin} = req.body
       const db = req.app.get('db')
        const clientArr = await db.find_client_by_email([email])
        if(clientArr[0]) {
            return res.status(200).send({ message: 'Email is already in use.'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let newClientArr = await db.create_client([first_name, last_name, email, hash, phone_number, is_admin])
        req.session.user = {firstName: newClientArr[0].first_name, lastName: newClientArr[0].last_name, email: email}
        res.status(200).send({
            message: "Logged in",
            userData: req.session.user,
            loggedIn: true
        })
    }
}