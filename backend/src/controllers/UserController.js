const users = require('../../models/users');

module.exports = {
    async index(req, res){
        const user = await users.findAll({
            raw: true
        }).then((Users) => res.json(Users))
    },

    async create(req, res){
        const { name_user, password_user, email, name_img} = req.body;
        
        const find = await users.findOne({
            raw: true,
            where:{ 
                name_user: name_user
            }
        })

        if(find){
            return res.status(404).json({ error : `${name_user} already exists`})
        }

        if(name_user.length <= 5 || password_user.length <= 5){
            return res.status(404).json({ error : 'min 5 caracters'})
        }

        const user = await users.create(
        {
            name_user,
            password_user,
            email,
            name_img
        }
    )
        return res.json(user)
    },
}