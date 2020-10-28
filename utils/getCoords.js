/**
 * Get data from multiple columns
 * @param {array} dataset - Array containing dataset
 * @return {array} array containing values from the location column
 */

// location -> latitude & longitude
const getCoords = (dataset) => {
  return dataset.map((el) => {
    return [el.areaid, el.location.latitude, el.location.longitude];
  } );
};

module.exports = {
  getCoords,
};
