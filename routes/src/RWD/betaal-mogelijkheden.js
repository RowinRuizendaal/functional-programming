const express = require('express');
const router = express.Router();
const datasetHelper = require('../../../helper/dataset');
const dataHelper = require('../../../utils/dataHelper');
const dataset1 = require('../../../dataset/RWD/r3rs-ibz5.json'); // Local file for testing purpose
const dataset2 = require('../../../dataset/RWD/t5pc-eb34.json'); // Local file for testing purpose

/**
 * Datasets needed
 * https://data.overheid.nl/dataset/11389-open-data-parkeren--betaalmethode-gebied
 * https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg (?)
 * https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
 * */


router.get('/betaalmethode', async (req, res) => {
  // Get areaID & paymentmethod
  const endpoint1 = datasetHelper.getColumns(dataset1, ['areaid', 'paymentmethod']);
  // Get latitude & longitude
  const endpoint2 = dataHelper.getCoords(dataset2);

  // combine the datasets together with the key areaid
  const combine = dataHelper.combineDataset(endpoint1, endpoint2, 'areaid');

  return res.json(combine);
});

module.exports = router;
