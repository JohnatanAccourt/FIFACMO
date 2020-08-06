const users = require('../../models/users');
const teams = require('../../models/teams');
const { raw } = require('express');
const sequelize = require('sequelize');

module.exports = {
    async create(req, res){
    const { name_user, password_user} = req.body;
        users.hasOne(teams, {foreignKey: 'user_id', targetKey: 'user_id' })

        const user = await users.findOne(
            {
                where:{
                    name_user: name_user,
                    password_user: password_user
                },
                attributes:{
                    exclude:['password_user']
                },
                include: [{
                    model: teams,
                    required: false,
                }],
            }
        )
        if(!user){
            return res.status(404).json({ error : "User not found"})
        }
        return res.json(user)
    },
    async index(req, res){
        const team_id = req.headers.authorization;
        const team = await teams.findOne(
            {
                where:{
                    team_id: team_id
                }   
            }
        )
        if(!team){
            return res.status(404).json({ error : "User not found"})
        }
        return res.json(team)
    },
    
}