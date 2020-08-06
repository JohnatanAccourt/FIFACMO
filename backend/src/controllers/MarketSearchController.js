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
                attributes:{
                    exclude:[
                        'dob',
                        'potential', 
                        'wage_eur', 
                        'international_reputation', 
                        'work_rate', 'body_type', 
                        'release_clause_eur', 
                        'team_position', 
                        'team_jersey_number', 
                        'loaned_from', 
                        'joined',
                        'contract_valid_until',
                        'nation_position',
                        'nation_jersey_number',
                        'favorites_id',
                        'cart_id'
                    ]
                }
            }
        )

        const count = await players.findAndCountAll({
            raw : true,
            order: [[ 'overall','DESC' ]],
            where:{
                short_name: {[Op.like]: `%${nameplayer}%`},
                team_id: null,
            }
        })

        res.header('X-Total-Count', count.count)

        return res.json(playersSearch)
    },
}