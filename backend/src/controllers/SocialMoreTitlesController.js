const players = require('../../models/players');
const teams = require('../../models/teams');
const sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = { 
    async index(req, res){
        teams.hasMany(players, {foreignKey: 'sofifa_id'})
        players.belongsTo(teams, {foreignKey: 'sofifa_id' })
        
        const moreCups = await teams.findOne({
            raw: true, 
            order: [[ 'cups','DESC' ]],
            attributes: {
                exclude:['team_id', 'sofifa_id', 'user_id', 'leagues', 'midfield', 'attack', 'defense', 'budget']
            }
        })

        const moreLeagues = await teams.findOne({
            limit: 1,
            raw: true, 
            order: [[ 'leagues','DESC' ]],
            attributes: {
                exclude:['team_id', 'sofifa_id', 'user_id', 'cups', 'midfield', 'attack', 'defense', 'budget']
            }
        })

        return res.json([moreCups, moreLeagues]) 
    }
    
}