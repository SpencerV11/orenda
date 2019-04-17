let bcrypt = require('bcryptjs')

module.exports = {
   register: async (req, res) => {
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
    },

    login: async (req, res) => {
        const { login_email, login_password } = req.body
        const db = req.app.get('db')
        const clientArr = await db.find_client_by_email([login_email])
        if(clientArr.length === 0) {
            return res.status(201).send({message: 'Account not found. Try again.'})
        }
        const result = bcrypt.compareSync(login_password, clientArr[0].password)
        if(!result) {
            return res.status(200).send({message: "Incorrect password"})
        }
        req.session.user = {email: clientArr[0].email, firstName: clientArr[0].first_name, lastName: clientArr[0].last_name}
        res.status(200).send({
            message: 'Log in successful',
            loggedIn: true
        })
    },

    clientData: (req, res) => {
        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Please log in')
        }
    }
}