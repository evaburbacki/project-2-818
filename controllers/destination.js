const express = require('express')
const router = express.Router()
const amadeus = require("../api/amadeus");
const { sequelize } = require('../models');

router.get('/:id', async (req, res) => {
    const destinationId = req.params.id;
    const destination = await sequelize.models.destinations.findByPk(destinationId).then(res => {
        return {
            cityCode: res.description,
        }
    });
    const hotels = await amadeus.getHotels(destination.cityCode);
    res.render('destination', { hotels });
});

// TODO create a post endpoint that will add an entry in the userdestination db table assosicating a user_id with the destination_id



module.exports = router