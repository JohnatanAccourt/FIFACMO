const players = require('../../models/players');
const { Op } = require("sequelize");

module.exports = {
    async index(req, res){
        const nationality = req.params.nationality
        
        const page = req.query.page
        
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

        const minHeight = req.query.minHeight
        const maxHeight = req.query.maxHeight
    
    
        const playersSearch = await players.findAll(
            {
                raw : true,
                limit: 5,
                offset: ((page - 1) * 5),
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
                        height_cm:{
                            [Op.between]: [minHeight == '' ? '0': minvalue, maxHeight == '' ? '200': maxvalue]
                        },
                    }
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
                        }
                }
            }
        })

        res.header('X-Total-Count', count)
        return res.json(playersSearch)
    },
}