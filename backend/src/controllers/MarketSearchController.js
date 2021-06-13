const players = require('../../models/players');
const { Op } = require("sequelize");

module.exports = {
    async index(req, res){
        const nameplayer = req.params.nameplayer
    
        const playersSearch = await players.findAll(
            {
                raw : true,
                order: [[ 'overall','DESC' ]],
                where:{
                    short_name: {[Op.like]: `%${nameplayer}%`},
                    team_id: null,
                },
                attributes:[
                    'sofifa_id',
                    'short_name',
                    'age',
                    'height_cm',
                    'weight_kg',
                    'player_positions',
                    'nationality',
                    'overall',
                    'value_eur',
                ]
            }
        )

        const count = await players.count({
            raw : true,
            order: [[ 'overall','DESC' ]],
            where:{
                short_name: {[Op.like]: `%${nameplayer}%`},
                team_id: null,
            }
        })
        res.header('X-Total-Count', count);
        return res.json(playersSearch);
    },
}