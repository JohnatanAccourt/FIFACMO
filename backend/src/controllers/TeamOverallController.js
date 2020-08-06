const squad = require('../../models/squad');
const players = require('../../models/players');
const teams = require('../../models/teams');

const sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = { 
    async index(req, res){
        const team_id = req.params.teamID;
        squad.hasMany(players, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        players.hasMany(squad, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })

        const squadResult = await squad.findAll({
            where:{ team_id: team_id },
            attributes: [],
            include:[{ model: players, attributes:['player_positions'] }]
        })

        const result = squadResult.map((item) => {
            return item.players.map((subitem) => {
                return subitem.player_positions.split(',')[0]
            })
        })

        result.map(async (item) => {
            if(item == 'GK' || item == 'RB' || item == 'RCB' ||
            item == 'CB' || item == 'LCB' || item == 'LB' || item == 'RWB' || 
            item == 'RDM' || item == 'CDM' || item == 'LDM' || item == 'RWB'){
                const playerResult = await squad.findAll({
                    where:{ team_id: team_id },
                    attributes: [],
                    include:[{ model: players, attributes:['overall'], where: {player_positions: {[Op.like]: `%${item}%`}} }]
                })
                const playerOverall = playerResult.map((item) => { return item.players.map((subitem) => { return subitem.overall } )})
                const reducedArray = playerOverall.map((item) => { return item.reduce((sum, x) => sum + x)})
                const total = reducedArray.reduce((sum, x) => sum + x) 
                
                const count = await squad.findAndCountAll({
                    raw: true,
                    where:{ team_id: team_id },
                    attributes: [],
                    include:[{ model: players, attributes: ['player_positions'], where: {player_positions: {[Op.like]: `%${item}%`}} }]
                })
                
                const defenseOverall = total / count.count
                await teams.update({ defense: defenseOverall}, { where: { team_id: team_id }})
            }
            else{
                console.log('defense false', item)
            }
        })

        result.map(async (item) => {
            if(item == 'RM' || item == 'RCM' || item == 'CM' || item == 'LCM' ||
                item == 'LM' || item == 'RAM' || item == 'CAM' || item == 'LAM'){
                const playerResult = await squad.findAll({
                    where:{ team_id: team_id },
                    attributes: [],
                    include:[{ model: players, attributes:['overall'], where: {player_positions: {[Op.like]: `%${item}%`}} }]
                })
                const playerOverall = playerResult.map((item) => { return item.players.map((subitem) => { return subitem.overall } )})
                const reducedArray = playerOverall.map((item) => {return item.reduce((sum, x) => sum + x)})
                const total = reducedArray.reduce((sum, x) => sum + x) 
                
                const count = await squad.findAndCountAll({
                    raw: true,
                    where:{ team_id: team_id },
                    attributes: [],
                    include:[{ model: players, attributes: ['player_positions'], where: {player_positions: {[Op.like]: `%${item}%`}} }]
                })

                const midfieldOverall = total / count.count
                await teams.update({ midfield: midfieldOverall}, { where: { team_id: team_id }})
            }
            else{
                console.log('midfield false', item)
            }
        })

        result.map(async (item) => {
            if(item == 'RW' || item == 'RF' || item == 'CF' || item == 'LF' ||
               item == 'LW' || item == 'RS' || item == 'ST' || item == 'LS'){
                const playerResult = await squad.findAll({
                    where:{ team_id: team_id },
                    attributes: [],
                    include:[{ model: players, attributes:['overall'], where: {player_positions: {[Op.like]: `%${item}%`}} }]
                })
                const playerOverall = playerResult.map((item) => { return item.players.map((subitem) => { return subitem.overall } )})
                const reducedArray = playerOverall.map((item) => {return item.reduce((sum, x) => sum + x)})
                const total = reducedArray.reduce((sum, x) => sum + x) 
                
                const count = await squad.findAndCountAll({
                    raw: true,
                    where:{ team_id: team_id },
                    attributes: [],
                    include:[{ model: players, attributes: ['player_positions'], where: {player_positions: {[Op.like]: `%${item}%`}} }]
                })

                const attackOverall = total / count.count
                await teams.update({ attack: attackOverall}, { where: { team_id: team_id }})
            }
            else{
                console.log('attack false', item)
            }
        })

        return res.json(squadResult) 
    }
}