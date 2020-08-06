const notifications = require('../../models/notifications');

module.exports = {
    async index(req, res){
        const team_id = req.headers.authorization;
        const allNotifications = await notifications.findAll({
            raw: true,
            where:{ team_id_received: team_id, notification_read: "true"}
        })

        return res.json(allNotifications)
    },
    async delete(req, res){
        const team_id = req.headers.authorization;
        const notification_id = req.params.notificationID
        const notification = await notifications.findOne({
            raw: true,
            where:{ team_id_received: team_id, notifications_id: notification_id}
        })

        if(!notification) return res.status(404).json({ error : 'Operation not permited'})
        if(notification.allow_btn == 'true') return res.status(404).json({ error : 'Negociation still in operation.'})

        const delNotification = await notifications.destroy({
            where:{
                team_id_received: team_id,
                notifications_id: notification_id
            }
        })

        return res.json(delNotification)
    },
    
    async read(req, res){
        const team_id = req.params.teamID
        const notification_id = req.params.notificationID
        const notification = await notifications.findAll({
            raw: true,
            where:{ team_id_received: team_id, notifications_id: notification_id}
        })

        if(!notification) return res.status(404).json({ error : 'Operation not permited'})

        const notificationRead = await notifications.update({notification_read: 'true'}, { where: {team_id_received: team_id, notifications_id: notification_id} })

        return res.json(notificationRead)
    }

}