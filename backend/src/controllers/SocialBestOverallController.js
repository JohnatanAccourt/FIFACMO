const players = require('../../models/players');
const teams = require('../../models/teams');
const sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = { 
    async index(req, res){
        
        const bestDefense = await teams.findOne({
            raw: true, 
            order: [[ 'defense','DESC' ]],
            attributes: {
                exclude:['team_id', 'sofifa_id', 'user_id', 'budget', 'leagues', 'cups', 'midfield', 'attack']
            }
        })

        const bestMidfield = await teams.findOne({
            raw: true, 
            order: [[ 'midfield','DESC' ]],
            attributes: {
                exclude:['team_id', 'sofifa_id', 'user_id', 'budget', 'leagues', 'cups', 'attack', 'defense']
            }
        })

        const bestAttack = await teams.findOne({
            raw: true, 
            order: [[ 'midfield','DESC' ]],
            attributes: {
                exclude:['team_id', 'sofifa_id', 'user_id', 'budget', 'leagues', 'cups', 'midfield', 'defense']
            }
        })

        return res.json([bestDefense, bestMidfield, bestAttack]) 
    }
    
}