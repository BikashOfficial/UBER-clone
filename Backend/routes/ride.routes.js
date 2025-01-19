const express = require('express')
const router = express.Router();
const { body, query } = require('express-validator');
//note----------------------------------------------------------------
//for post use body and for get use query

const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/create',
    authMiddleware.authUser,  // Only authenticated users can create rides.
    body('pickup').isString().isLength({ min: 3 }).withMessage('invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('invalid destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('invalid vehicle type'),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('invalid destination address'),
    rideController.getFare
)

router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('invalid ride id'),
    rideController.confirmRide
)

router.get('/start-ride',
    authMiddleware.authCaptain,
    query('rideId').isMongoId().withMessage('invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('invalid otp'),
    rideController.startRide
)

router.post('/end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('invalid ride id'),
    rideController.endRide
)

module.exports = router;
