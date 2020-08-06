const players = require('../../models/players');

const favorite = require('../../models/favorite')
const sequelize = require('sequelize');
const { Op } = require("sequelize");

module.exports = { 
    async index(req, res){
        const team_id = req.headers.authorization;
        favorite.hasMany(players, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        players.hasMany(favorite, {foreignKey: 'sofifa_id', sourceKey: 'sofifa_id' })
        
        const playerVerified = await players.findAll({
            raw: true,
            where: { team_id: {[Op.ne]: null}},
            attributes: ['team_id', 'sofifa_id'] 
        })

        playerVerified.map(async(player) => {
            return await favorite.destroy({ where: { sofifa_id: player.sofifa_id}})
        })
        
        const favorites = await favorite.findAll(
            {
                where:{
                    team_id: team_id,
                },

                include:[{
                    model: players,
                    required: false,
                    where:{
                        team_id: null
                    }
                }]
            }
        )

        const count = await favorite.findAndCountAll({
            where:{
                team_id: team_id,
            },
        })

        res.header('X-Total-Count', count.count)

        return res.json(favorites) 
    },

    async create(req, res){
        const team_id = req.headers.authorization;
        const { sofifa_id } = req.body;
        const find = await favorite.findOne({
            raw: true,
            where:{
                team_id: team_id,
                sofifa_id: sofifa_id
            }
        })

        const player = await players.findOne({ where:{ team_id: null, sofifa_id: sofifa_id }}) 

        if(find) return res.status(404).json({ error : 'Already in favorites'})
        if(!team_id || team_id === null) return res.status(404).json({ error : 'Operation not permited'})
        if(player.team_id != null) return res.status(404).json({ error : 'Belongs an another team'})

        const favorites = await favorite.create(
            {
                sofifa_id,
                team_id,
            }
        )
        return res.json(favorites)
    },

    async delete(req, res){
        const team_id = req.headers.authorization;
        const sofifa_id = req.params.playerID;
        const fav = await favorite.findAll({
            raw: true,
            where:{
                team_id: team_id,
                sofifa_id: sofifa_id
            }
        })
        
        if(!fav){
            return res.status(402).json({ error : 'Player not found'})
        }

        const favorites = await favorite.destroy(
            {
                where:{
                    team_id: team_id,
                    sofifa_id: sofifa_id,
                },
                
            }
        )
        return res.json(favorites)
    }
    
}