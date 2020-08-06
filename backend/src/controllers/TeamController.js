const teams = require('../../models/teams');

module.exports = {
    async create(req, res){
        const user_id = req.headers.authorization;
        const { name_team, team_img } = req.body;

        const find = await teams.findOne({
            raw: true,
            where:{ 
                name_team: name_team
            }
        })

        if(find){
            return res.status(404).json({ error : `${name_team} already exists`})
        }

        const team = await teams.create(
        {
            name_team,
            team_img,
            user_id
        }
    )
    return res.json(team)
    },
}