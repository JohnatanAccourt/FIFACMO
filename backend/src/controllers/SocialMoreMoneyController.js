const players = require('../../models/players');
const teams = require('../../models/teams');
const sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = { 
    async index(req, res){
        const withMoreMoney = await teams.findOne({
            raw: true, 
            order: [[ 'budget','DESC' ]],
            attributes: {
                exclude:['team_id', 'sofifa_id', 'user_id', 'leagues', 'cups', 'midfield', 'attack', 'defense']
            }
        })

        const withLessMoney = await teams.findOne({
            limit: 1,
            raw: true, 
            order: [[ 'budget','ASC' ]],
            attributes: {
                exclude:['team_id', 'sofifa_id', 'user_id', 'leagues', 'cups', 'midfield', 'attack', 'defense']
            }
        })

        return res.json([withMoreMoney, withLessMoney]) 
    }
    
}