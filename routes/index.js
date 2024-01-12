const express = require('express');
const router = express.Router();
const Story = require('../models/Story');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('login', { layout: 'login' });
});

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .lean();

    console.log(req.user);

    res.render('dashboard', {
      name: req.user.name,
      stories,
    });
  } catch (error) {
    console.error(error);
    res.render('error/500');
  }
});

module.exports = router;
