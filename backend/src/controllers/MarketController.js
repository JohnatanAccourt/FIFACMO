const players = require('../../models/players');
const { Op } = require("sequelize");
const exclude = require('../../consts/exclude');

module.exports = {

    async index(req, res){
        const page = req.query.page

        const nationality = req.query.nationality
        
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
                offset: (page - 1) * 5,
                subQuery: false,
                order: [[ 'overall', 'DESC' ]],
                where: { 
                    team_id: null,
                    [Op.and]:{
                        nationality: nationality == '' ? { [Op.like]: '%'} : nationality,
                        player_positions: {[Op.like]: `%${position}%`},
                        skill_moves: skill == '' ? { [Op.like]: '%'} : skill,
                        real_face: realface == '' ? { [Op.like]: '%'} : realface,
                        weak_foot: weakfoot == '' ? { [Op.like]: '%'} : weakfoot,
                        age:{
                            [Op.between]: [minage == undefined ? '16': minage, maxage == '' ? '47': maxage]
                        },
                        value_eur:{
                            [Op.between]: [minvalue == undefined ? '0': minvalue, maxvalue == '' ? '300000000': maxvalue]
                        },
                        overall:{
                            [Op.between]: [minOverall == undefined ? '46': minOverall, maxOverall == '' ? '98': maxOverall]
                        },
                        height_cm:{
                            [Op.between]: [minHeight == undefined ? '0': minvalue, maxHeight == '' ? '200': maxvalue]
                        },
                    } 
                },
                attributes:{ exclude }
            }
        )

        const count = await players.count(
            {
                raw : true,
                limit: 5,
                offset: ((page - 1) * 5),
                subQuery: false,
                order: [[ 'overall', 'DESC' ]],
                where: { 
                    team_id: null,
                    [Op.and]:{
                        nationality: nationality == '' ? { [Op.like]: '%'} : nationality,
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
                attributes:{ exclude },
            }
        )
        res.header('X-Total-Count', count)

        return res.json(playersSearch)
    },
}