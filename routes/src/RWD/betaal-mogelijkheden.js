const express = require('express');
const router = express.Router();
const dataset = require('../../../dataset/RWD/r3rs-ibz5.json'); // Local file for testing purpose
const dataHelper = require('../../../helper/dataset');

/**
 * Datasets needed
 * https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg
 * https://data.overheid.nl/dataset/11389-open-data-parkeren--betaalmethode-gebied
 * */


router.get('/betaalmethode', async (req, res) => {
  const data = dataHelper.getColumns(dataset, ['areaid', 'paymentmethod']);
  return res.json(data);
});

module.exports = router;
