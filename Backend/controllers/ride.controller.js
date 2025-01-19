const rideService = require('../services/ride.service.js')
const mapService = require('../services/maps.service.js')
const { validationResult } = require('express-validator')
const { sendMessageToSocketId } = require('../socket.js')
const rideModel = require('../models/ride.model.js')

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);

        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
        console.log(pickupCoordinates);

        const captainInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2000);

        console.log(captainInRadius);

        ride.otp = "";

        const riderWithUser = await rideModel.findOne({ _id: ride._id }).populate('user')

        captainInRadius.map(captain => {

            sendMessageToSocketId(captain.socketId, {
                event: "new-ride",
                data: riderWithUser
            })
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json(fare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { rideId } = req.body;

    try {
        const ride = await rideService.confirmRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: "ride-confirmed",
            data: ride
        })

        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { rideId, otp } = req.query;
    console.log(rideId);
    console.log(otp);
    try {
        const ride = await rideService.startRide({ rideId, otp, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: "ride-started",
            data: ride
        })

        return res.status(200).json(ride);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports.endRide = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try{
        const ride = await rideService.endRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: "ride-ended",
            data: ride
        })

        return res.status(200).json(ride);

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

}
