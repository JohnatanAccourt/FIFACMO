const notifications = require('../../models/notifications');

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
    
        setTimeout(async () => {
            await notifications.update({notification_read: 'true'}, { where:{ team_id_sent: team_id_sent, player_id: player_id} })
    
        }, 43200000)
        
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
    
        return res.json(createNotification)
    
    }

}
