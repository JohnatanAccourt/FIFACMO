const players = require('../../models/players');
const { Op } = require("sequelize");

module.exports = {
    async index(req, res){
        const page = req.query.page

        const playersSearch = await players.findAll( //findAndCountAll
            {
                raw : true,
                limit: 5,
                offset: ((page - 1) * 5),
                subQuery: false,
                order: [[ 'overall','DESC' ]],
                where: { team_id: null },
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

        // using this is much more slow although easy to front-end catch data

        const count = await players.findAndCountAll({
            raw : true,
        })

        res.header('X-Total-Count', count.count)

        return res.json(playersSearch)
    },
}