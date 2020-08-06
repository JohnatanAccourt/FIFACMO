const players = require('../../models/players');
const { Op } = require("sequelize");

module.exports = {
    async index(req, res){
        const nationality = req.params.nationality
        const position = req.query.position
        const skill = req.query.skill
        const realface = req.query.realface
        const weakfoot = req.query.weakfoot
        
        const minage = req.query.minage 
        const maxage = req.query.maxage
        
        const minvalue = req.query.minvalue
        const maxvalue = req.query.maxvalue
    
        const minOverall = req.query.minOverall
        const maxOverall = req.query.maxOverall
    
    
        const playersSearch = await players.findAll(
            {
                raw : true,
                order: [[ 'overall','DESC' ]],
                where: {
                    team_id: null,
                    [Op.and]:{
                        nationality: nationality == '1' ? { [Op.like]: '%'} : nationality,
                        player_positions: {[Op.like]: `%${position}%`},
                        skill_moves: skill == '' ? { [Op.like]: '%'} : skill,
                        real_face: realface == '' ? { [Op.like]: '%'} : realface,
                        weak_foot: weakfoot == '' ? { [Op.like]: '%'} : weakfoot,
                        age:{
                            [Op.between]: [minage == '' ? '16': minage, maxage == '' ? '47': maxage]
                        },
                        value_eur:{
                            [Op.between]: [minvalue == '' ? '0': minvalue, maxvalue == '' ? '300000000': maxvalue]
                        },
                        overall:{
                            [Op.between]: [minOverall == '' ? '46': minOverall, maxOverall == '' ? '98': maxOverall]
                        },
                    }
                    
                    // future implements:
                    // height_cm:{
                    //     [Op.between]: [minHeight, maxHeight]
                    // },
                    // weight_kg:{
                    //     [Op.between]: [minWeight, maxWeight]
                    // }, 
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
                where: {
                    team_id: null,
                    [Op.and]:{
                        nationality: nationality == '1' ? { [Op.like]: '%'} : nationality,
                        player_positions: {[Op.like]: `%${position}%`},
                        skill_moves: skill == '' ? { [Op.like]: '%'} : skill,
                        real_face: realface == '' ? { [Op.like]: '%'} : realface,
                        weak_foot: weakfoot == '' ? { [Op.like]: '%'} : weakfoot,
                        age:{
                            [Op.between]: [minage == '' ? '16': minage, maxage == '' ? '47': maxage]
                        },
                        value_eur:{
                            [Op.between]: [minvalue == '' ? '0': minvalue, maxvalue == '' ? '300000000': maxvalue]
                        },
                        overall:{
                            [Op.between]: [minOverall == '' ? '46': minOverall, maxOverall == '' ? '98': maxOverall]
                        },

                }
            }
        })

        res.header('X-Total-Count', count.count)
        return res.json(playersSearch)
    },
}