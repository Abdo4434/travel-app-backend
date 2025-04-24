const express = require('express');
const router = express.Router();
const verifyUser = require('../middleware/verifyUser');
const {
  addToWishlist,
  getWishlist,
  removeFromWishlist
} = require('../controllers/wishlistcontroller');

router.post('/', verifyUser, addToWishlist);
router.get('/:userId', getWishlist);
router.delete('/', removeFromWishlist);

module.exports = router;