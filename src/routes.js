const express = require('express');
const DevController = require('./controllers/DevController')
const likeController = require('./controllers/LikeController');
const dislikeController = require('./controllers/DislikeController');




const routes = express.Router();
console.log('server listing on 3333...')

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes',likeController.store);
routes.post('/devs/:devId/dislikes',dislikeController.store);

module.exports = routes; 