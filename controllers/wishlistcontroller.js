const Wishlist = require('../models/Wishlist');

exports.addToWishlist = async (req, res) => {
  const { hotelId } = req.body;
  const userId = req.user.userId;

  try {
    const exists = await Wishlist.findOne({ userId, hotelId });
    if (exists) return res.status(400).json({ message: 'Already in wishlist' });

    const wish = new Wishlist({ userId, hotelId });
    await wish.save();
    res.status(201).json(wish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({ userId: req.params.userId }).populate('hotelId');
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  const { userId, hotelId } = req.body;

  try {
    await Wishlist.findOneAndDelete({ userId, hotelId });
    res.json({ message: 'Removed from wishlist' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};