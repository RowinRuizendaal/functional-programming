const express = require('express');
const router = express.Router();


// Pages required
const bedtijd = require('./src/bedtijd');
const oogkleur = require('./src/oogkleur');


// Make routes
router.use('/', bedtijd);
router.use('/', oogkleur);


module.exports = router;
