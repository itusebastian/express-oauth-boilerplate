const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Express OAuth Boilerplate',
    authenticated: req.isAuthenticated(),
    user: req.user || null,
    links: {
      login: '/auth/google',
      profile: req.isAuthenticated() ? '/profile' : null,
      logout: req.isAuthenticated() ? '/auth/logout' : null,
      docs: '/api-docs'
    }
  });
});

router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  res.json({
    message: 'User profile',
    user: req.user
  });
});

module.exports = router;
