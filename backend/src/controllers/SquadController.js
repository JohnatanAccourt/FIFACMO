const players = require('../../models/players');
const teams = require('../../models/teams');
const squad = require('../../models/squad');
const cart = require('../../models/cart');
const sequelize = require('sequelize');
const { count } = require('./CartController');

const { Op } = require('sequelize');

module.exports = {
    async index(req, res){
        const team_id = req.headers.authorization;
        squad.hasMany(players, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        players.hasOne(squad, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })

        const player = await squad.findAll({
            where:{ team_id: team_id },
            attributes: ['squad_id'],
            include:[{ model: players, required: false}]
        })

        const count = await squad.findAndCountAll({ where:{ team_id: team_id } })
        res.header('X-Total-Count', count.count)

        return res.json(player)
    },

    async create(req, res){
        squad.hasMany(cart, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        cart.hasOne(squad, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' }) 
        cart.hasMany(players, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        players.hasMany(cart, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' }) 
        const team_id = req.params.teamID;
        const { sofifa_id } = req.body;

        // all players in cart
        const allcart = await cart.findAll({ raw: true, where: {team_id: team_id}, attributes: ['sofifa_id', 'team_id'] })
        console.log(allcart)

        // counting number in squad and in cart to make some rules
        const countInSquad = await squad.findAndCountAll({raw: true, where: { team_id: team_id }})
        const countInCart = await cart.findAndCountAll({raw: true, where: { team_id: team_id }})
        
        // if(countInSquad.count == 0 && countInCart.count < 22) return res.status(404).json({ error : 'You must`ve 22 players in cart at least'});
        if(countInSquad.count >= 22 && countInCart > 5) return res.status(404).json({ error : 'Just 4 players for once'});
        if(countInSquad.count > 35) return res.status(404).json({ error : "Squad's already full" })

        // here's budget and price of the card to discount before buy all of the players in cart.
        const budget = await teams.findAll({raw: true, where: {team_id: team_id}, attributes: ['budget'] })
        const countCart = await cart.findAll({
            raw: true, 
            where: {team_id: team_id}, 
            attributes: [[sequelize.fn('sum', sequelize.col('value_eur')), 'total_amount']],
            include:[{model: players, required: true, attributes: []}]
        })

        const rest = budget[0].budget - countCart[0].total_amount

        // verification if the team have money enough to buy the entire cart and putting team_id in player(s) row(s)
        // after all erasing all players bought in cart

        if(rest < 0){
            return res.status(404).json({ error : "You don't have money enough"})
        }else{
            budget.budget = rest
            await teams.update({ budget: budget.budget }, { where: { team_id: team_id } })
            await players.bulkCreate(allcart, { updateOnDuplicate: ['team_id']})
        }
        await cart.destroy({where:{ team_id: team_id }})
        const player = await squad.bulkCreate(allcart)

        // finally avoiding the another team buy the same player

        const playerVerified = await players.findAll({raw: true, where: { team_id: {[Op.ne]: null }}, attributes: ['team_id', 'sofifa_id']})
        const result = playerVerified.map(async(player) => { return await cart.destroy({ where: { sofifa_id: player.sofifa_id}})})

        return res.json(player) 
    },

    async delete(req, res){
        const team_id = req.headers.authorization;
        const sofifa_id = req.params.playerID;

        const fav = await squad.findOne({ raw: true, where: {team_id: team_id, sofifa_id: sofifa_id} })
        if(!fav) return res.status(402).json({ error : 'Player not found'})
        
        const valuePlayer = await players.findOne({ raw: true, where: {team_id: team_id, sofifa_id: sofifa_id}, attributes: ['value_eur'] })
        const budget = await teams.findOne({raw: true, where: {team_id: team_id}, attributes: ['budget'] })

        const dividedAmount = (85 / 100) * valuePlayer.value_eur
        const valueTotal = dividedAmount + budget.budget
        console.log(valueTotal)

        await teams.update({ budget: valueTotal }, { where: { team_id: team_id }})
        await players.update({ team_id: null}, { where: {sofifa_id: sofifa_id }})
        
        const squadTeam = await squad.destroy({ where:{ team_id: team_id, sofifa_id: sofifa_id }})
        return res.json(squadTeam)
    }
    
}