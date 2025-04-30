// routes/hotelRouter.js
const express = require('express');
const router = express.Router();
const hotelController = require('../Controllers/hotelController');

// Routes
router.post('/', hotelController.createHotel);
router.get('/', hotelController.getAllHotels);
router.get('/:id', hotelController.getHotelById);
router.put('/:id', hotelController.updateHotel);
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;