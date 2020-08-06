const players = require('../../models/players');
const teams = require('../../models/teams');
const sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = { 
    async index(req, res){
        teams.hasMany(players, {foreignKey: 'team_id', targetKey: 'team_id'})
        players.belongsTo(teams, {foreignKey: 'team_id', targetKey: 'team_id'})
        const moreExpensive = await teams.findOne({
            attributes:{
                exclude:['sofifa_id', 'user_id', 'leagues', 'cups', 'midfield', 'attack', 'defense'],
            },
            include:[{
                model: players,
                // required: false,
                attributes: [
                    [sequelize.fn('sum', sequelize.col('value_eur')), 'total_amount']
                ],
            }]
        })

        return res.json(moreExpensive) 
    }
    
}