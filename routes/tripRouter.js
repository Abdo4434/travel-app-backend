const express = require('express');
const router = express.Router();
const tripController = require('../Controllers/tripcontroller');

// Routes
router.post('/', tripController.createTrip);
router.get('/', tripController.getAllTrips);
router.get('/:id', tripController.getTripById);
router.put('/:id', tripController.updateTrip);
router.delete('/:id', tripController.deleteTrip);

module.exports = router;