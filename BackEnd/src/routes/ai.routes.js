const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();


router.post("/", aiController.getReview)


module.exports = router;    