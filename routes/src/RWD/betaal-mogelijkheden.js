const express = require('express');
const router = express.Router();
const dataHelper = require('../../../helper/dataset');
const getCoords = require('../../../utils/getCoords');
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
  const endpoint1 = dataHelper.getColumns(dataset1, ['areaid', 'paymentmethod']);
  // Get latitude & longitude
  const endpoint2 = getCoords.getCoords(dataset2);

  // get the areaid for check
  const areaid = endpoint2.map((el) => {
    return el.shift();

    // Logic to check if values contain values in endpoint1
  } );

  console.log(areaid);
});

module.exports = router;
