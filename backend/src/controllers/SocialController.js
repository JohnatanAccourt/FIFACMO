const players = require('../../models/players');
const teams = require('../../models/teams');
const users = require('../../models/users');
const sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = { 
    async index(req, res){
        users.hasMany(teams, {foreignKey: 'user_id', sourceKey: 'user_id'})
        teams.hasMany(users, {foreignKey: 'user_id', sourceKey: 'user_id'})
        teams.hasMany(players, {foreignKey: 'team_id', targetKey: 'team_id'})
        const team_id = req.headers.authorization;

        const allTeams = await teams.findAll({
            attributes: {
                exclude:['sofifa_id']
            },
            include:[{
                model: players,
                where: { team_id: {[Op.ne]: null, [Op.ne]: team_id} },
                attributes: [
                    'sofifa_id',
                    'short_name', 
                    'nationality', 
                    'overall', 
                    'value_eur', 
                    'player_positions', 
                    'team_id', 
                    'pace', 
                    'shooting',
                    'passing',
                    'dribbling',
                    'defending',
                    'physic',
                    'gk_diving',
                    'gk_handling',
                    'gk_kicking',
                    'gk_reflexes',
                    'gk_speed',
                    'gk_positioning'
                ]
            }]
        })

        return res.json(allTeams)  
    }
    
}