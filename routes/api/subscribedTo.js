const router = require("express").Router();
const subscribedTo = require("../../controllers/SubscribedToController.js");
const axios = require("axios");


router.route("/")
.get(subscribedTo.findAll)
.post(subscribedTo.create)

router.route("/:challenge_name")
.get(subscribedTo.findByChallengeName)

router.route("/challenge/:ChallengeId/user/:UserId")
.get(subscribedTo.findByUserAndChallengeId)


module.exports = router;


 


