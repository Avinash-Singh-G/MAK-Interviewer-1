const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const passport = require('passport');


router.get('/sign-in', usersController.signIn);
// router.get('/sign-up', userController.signUp);
router.post('/create', usersController.create);
router.get('/verify', usersController.verify);
router.get('/verify/:id', usersController.verified);
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/users/sign-in' },
), usersController.createSession);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/users/sign_in' }), usersController.createSession);


module.exports = router;