/**
 * Get data from a single column
 * @param {array} dataset - Array containing dataset
 * @param {array} columns - Array containing the names of the columns you want
 * @return {array} array containing values from the selected column
 */

const getColumn = (dataset, column) => {
  return dataset.map((result) => result[column]);
};

/**
 * Get data from multiple columns
 * @param {array} dataset - Array containing dataset
 * @param {array} columns - Array containing the names of the columns you want
 * @return {array} array containing values from the selected column
 */

const getColumns = (dataset, columns) => {
  return dataset.map((value) => {
    const data = {};

    for (let i = 0; i < columns.length; i++) {
      data[columns[i]] = value[columns[i]];
    }

    return data;
  });
};

module.exports = {
  getColumn,
  getColumns,

};
