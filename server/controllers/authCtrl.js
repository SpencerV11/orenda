let bcrypt = require('bcryptjs')

module.exports = {
    register:  async (req, res) => {
        let { firstName, lastName, phone, email, password} = req.body
        let db = req.app.get('db')
        let clientArr = await db.find_client_by_email([email])
        if(clientArr[0]) {
            return res.status(200).send({message: 'Email is already in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newClientArr = await db.reister_client([firstName, lastName, phone, email, hash])
        req.session.user({firstName: newClientArr[0].firstName, lastName: newClientArr[0].lastName, phone: newClientArr[0].phone, email: newClientArr[0].email, password: newClientArr[0].hash})
        res.status(200).send({
            message: 'Logged In',
            userData: req.session.user,
            loggedIn: true
        })
    },

    login: async (req, res) => {
        
    },
    logout: async (req, res) => {

    }
}