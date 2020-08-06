const players = require('../../models/players');
const squad = require('../../models/squad');

const cart = require('../../models/cart');
const users = require('../../models/users');
const sequelize = require('sequelize');
const teams = require('../../models/teams');
const { Op } = require('sequelize');

module.exports = {
    async index(req, res){
        const team_id = req.headers.authorization;
        cart.hasMany(players, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        players.hasMany(cart, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' }) 
        
        const playerVerified = await players.findAll({
            raw: true, 
            where: { team_id: {[Op.ne]: null }},
            attributes: ['team_id', 'sofifa_id']
        })

        playerVerified.map(async(player) => {
            return await cart.destroy({ where: { sofifa_id: player.sofifa_id}})
        })
        
        const cartPlayers = await cart.findAll(
            {
                where:{
                    team_id: team_id,
                },
                include:[{
                    model: players,
                    required: false,
                }]
            }
        )

        return res.json(cartPlayers)
    },

    async count(req, res){
        const team_id = req.headers.authorization;
        cart.hasMany(players, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        players.hasMany(cart, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })

        squad.hasMany(players, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        players.hasMany(squad, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })

        const cartPlayers = await cart.findAll(
            {
                where:{
                    team_id: team_id,
                },
                attributes: [
                    [sequelize.fn('count', sequelize.col('value_eur')), 'total_players'],
                    [sequelize.fn('sum', sequelize.col('value_eur')), 'total_amount']
                ],
                include:[{
                    model: players,
                    required: true,
                    attributes: []
                }]
            }
        )

        const squadPlayers = await squad.findAll(
            {
                where:{
                    team_id: team_id,
                },
                attributes: [
                    [sequelize.fn('sum', sequelize.col('value_eur')), 'total_squad']
                ],
                include:[{
                    model: players,
                    required: true,
                    attributes: []
                }]
            }
        )

        return res.json([cartPlayers, squadPlayers])
    },

    async create(req, res){
        const team_id = req.headers.authorization;
        cart.hasMany(players, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        players.hasMany(cart, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' }) 
        const { sofifa_id } = req.body;
        const find = await cart.findOne({
            raw: true,
            where:{
                team_id: team_id,
                sofifa_id: sofifa_id
            }
        })

        const player = await players.findOne({ where:{ team_id: null, sofifa_id: sofifa_id }})

        console.log(player.team_id)
        
        if(find) return res.status(404).json({ error : 'Already in Cart'})
        if(!team_id) return res.status(404).json({ error : 'Operation not permited'})
        if(player.team_id != null) return res.status(404).json({ error : 'Belongs an another team'})

        const cartItens = await cart.create(
            {
                sofifa_id,
                team_id
            }
        )
        return res.json(cartItens)
    },

    async delete(req, res){
        const team_id = req.headers.authorization;
        const sofifa_id = req.params.playerID;
        const fav = await cart.findAll({
            raw: true,
            where:{
                team_id: team_id,
                sofifa_id: sofifa_id
            }
        })
        
        if(!fav){
            return res.status(402).json({ error : 'Player not found'})
        }

        const cartRemoved = await cart.destroy(
            {
                where:{
                    team_id: team_id,
                    sofifa_id: sofifa_id,
                },
                
            }
        )

        //add in player table
        return res.json(cartRemoved)
    }
    
}