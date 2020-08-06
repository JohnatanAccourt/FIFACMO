const express = require('express');

const UserController = require('./controllers/UserController');
const MarketController = require('./controllers/MarketController');
const MarketSearchController = require('./controllers/MarketSearchController');
const MarketFilterController = require('./controllers/MarketFilterController');
const SessionController = require('./controllers/SessionController');
const TeamController = require('./controllers/TeamController');
const FavoritesController = require('./controllers/FavoriteController');
const NationalityController = require('./controllers/NationalityController');
const CartController = require('./controllers/CartController');
const SquadController = require('./controllers/SquadController');
const TeamOverallController = require('./controllers/TeamOverallController');
const NotificationController = require('./controllers/NotificationController');
const NotificationOldController = require('./controllers/NotificationOldController');
const NotificationResponseController = require('./controllers/NotificationResponseController');

const SocialController = require('./controllers/SocialController');
const SocialBestOverallController = require('./controllers/SocialBestOverallController');
const SocialMoreTitlesController = require('./controllers/SocialMoreTitlesController');
const SocialMoreMoneyController = require('./controllers/SocialMoreMoneyController');
const SocialMoreExpensiveController = require('./controllers/SocialMoreExpensiveController');


const routes = express.Router();

// Register and login routes
routes.get("/Register", UserController.index)
routes.post("/Register", UserController.create)

routes.post("/RegisterTeam", TeamController.create)

routes.post("/Sessions", SessionController.create)
routes.get("/Sessions", SessionController.index)

// App routes
routes.get("/market", MarketController.index)
routes.get("/market/:nationality", MarketFilterController.index)
routes.get("/market/search/:nameplayer", MarketSearchController.index)

routes.get("/favorites", FavoritesController.index)
routes.post("/favorites", FavoritesController.create)
routes.delete("/favorites/:playerID", FavoritesController.delete)

routes.get("/nationality", NationalityController.index)

routes.get("/cart", CartController.index)
routes.get("/cart/total", CartController.count)
routes.post("/cart", CartController.create)
routes.delete("/cart/:playerID", CartController.delete)

routes.get("/squad", SquadController.index)
routes.post("/squad/:teamID", SquadController.create)
routes.delete("/squad/:playerID", SquadController.delete)

routes.post("/teamoverall/:teamID", TeamOverallController.index)

//social 
routes.get("/social", SocialController.index)
routes.get("/social/bestOverall", SocialBestOverallController.index)
routes.get("/social/moreTitles", SocialMoreTitlesController.index)
routes.get("/social/moreMoney", SocialMoreMoneyController.index)
routes.get("/social/moreExpensive", SocialMoreExpensiveController.index)

routes.post("/notification", NotificationController.create)
routes.get("/notification", NotificationController.index)
routes.get("/notification/count", NotificationController.count)

routes.get("/notification/old", NotificationOldController.index)
routes.delete("/notification/old/:notificationID", NotificationOldController.delete)
routes.post("/notification/:teamID/:notificationID", NotificationOldController.read)

routes.post("/notificationResponse", NotificationResponseController.create)

routes.post("/notification/read/:teamID/:playerID", NotificationController.remove)
routes.post("/notification/add/:teamID/:playerID", NotificationController.add)
routes.get("/notification/findOne/:teamID/:playerID", NotificationController.getOne)

module.exports = routes;