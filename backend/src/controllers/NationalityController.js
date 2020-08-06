const players = require('../../models/players');
const sequelize = require('sequelize');

module.exports = {
    async index(req, res){
        const nation = await players.findAll(
            {
                raw: true,
                attributes: [
                    [sequelize.fn('DISTINCT', sequelize.col('nationality')), 'nationality']
                ],
                order: [[ 'nationality']],
            }
        )

        return res.json(nation)
    }
    
}