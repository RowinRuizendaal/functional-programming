const getData = (column) => {
  const dataset = require('../dataset/Survey_Information_Design_clean-parsed.json');
  return dataset.map((result) => result[column]);
};

module.exports = getData;
