const notifications = require('../../models/notifications');
const teams = require('../../models/teams');
const players = require('../../models/players');
const squad = require('../../models/squad');

const sequelize = require('sequelize');
const { Op, where } = require('sequelize');

module.exports = {
    async create(req, res){
        const team_id_sent = req.headers.authorization;
        const { 
            propose_value, 
            message, 
            team_id_received, 
            player_id, 
            team_img, 
            allow_btn, 
            team_name, 
            player_value,
            player_name 
        } = req.body

        const playerVerified = await notifications.findOne({
            raw: true,
            where:{ team_id_sent: team_id_sent, player_id: player_id, allow_btn: 'true' }
        })

        if(playerVerified) return res.status(404).json({ error : 'You`ve already propose for this player'})

        const onPropose = await notifications.findOne({raw: true, where: { player_id: player_id, allow_btn: 'true' }})
        if(onPropose) return res.status(404).json({ error : 'On negotiation with another team'})

        // verification if the team have money enough
        // After, discount propose money from the team's budget temporarily

        const budget = await teams.findOne({ raw: true, where:{team_id: team_id_sent} })
        const result = (budget.budget - propose_value)

        if(result < 0){
            return res.status(404).json({ error : "You haven't money enough"})

        }else{
            budget.budget = result
            await teams.update({ budget: budget.budget }, { where: { team_id: team_id_sent } })
        }
        
        const createNotification = await notifications.create({
            propose_value,
            message,
            team_id_sent,
            team_id_received,
            player_id,
            team_img,
            allow_btn,
            team_name,
            player_value,
            player_name
        })

        // after 12hrs it'll be erased 
        setTimeout(async () => {
            await notifications.destroy({ where:{ team_id_sent: team_id_sent, player_id: player_id} })
        }, 43200000)

        return res.json(createNotification)

    },

    async index(req, res){
        const team_id = req.headers.authorization;
        const allNotifications = await notifications.findAll({
            raw: true,
            where:{ team_id_received: team_id, notification_read: "false"}
        })

        return res.json(allNotifications)
    },


    async count(req, res){
        const team_id = req.headers.authorization;
        const count = await notifications.findAndCountAll({
            raw: true,
            where:{ team_id_received: team_id, notification_read: 'false'}
        })

        return res.json(count.count)
    },


    async add(req, res){
        const player_id = req.params.playerID;
        const team_id = req. params.teamID;

        const propose = await notifications.findOne({
            raw: true,
            where:{ team_id_received: team_id, player_id: player_id}

        })
        // console.log(propose.team_id_sent)
        const team_id_sent = propose.team_id_sent

        await players.update({ team_id: team_id_sent }, { where: { team_id: team_id, sofifa_id: player_id} })
        await players.update({ value_eur: propose.propose_value}, { where: { sofifa_id: player_id}})
        await squad.update({ team_id: team_id_sent }, { where: { team_id: team_id, sofifa_id: player_id } })
        

        // amount tranfer money with team's budget 
        const budget = await teams.findOne({ raw: true, where: {team_id: team_id} })
        const result = (budget.budget + propose.propose_value)
        
        budget.budget = result
        await teams.update({ budget: budget.budget }, { where: { team_id: team_id } })

        // set as read and avoid money glitch just not showing the buttons again.
        await notifications.update({notification_read: 'true', allow_btn: 'false'}, { where: {team_id_received: team_id, player_id: player_id} })
        
        return res.json(result)
    },
    

    async remove(req, res){
        const player_id = req.params.playerID;
        const team_id = req. params.teamID;

        const propose = await notifications.findOne({
            raw: true,
            where:{ team_id_received: team_id, player_id: player_id}
        })

        // rebound money 
        const team_id_sent = propose.team_id_sent
        const budget = await teams.findOne({ raw: true, where: {team_id: team_id_sent} })
        const result = (budget.budget + propose.propose_value)
        
        budget.budget = result
        await teams.update({ budget: budget.budget }, { where: { team_id: team_id_sent } })

        // set as read and avoid money glitch just not showing the buttons again.
        await notifications.update({notification_read: 'true', allow_btn: 'false'}, { where: {team_id_received: team_id, player_id: player_id} })
        
        return res.json(result)
    },

    async getOne(req, res){
        const player_id = req.params.playerID;
        const team_id = req. params.teamID;

        const oneNotification = await notifications.findOne({
            raw: true,
            where:{ team_id_received: team_id, player_id: player_id}
        })

        return res.json(oneNotification)

    }

}