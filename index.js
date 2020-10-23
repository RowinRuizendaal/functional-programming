
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
require('dotenv').config();
const dataset = require('./dataset/Survey_Information_Design_clean-parsed.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');
app.set('views', 'views');


const getData = (data, column) => {
  return data.map((result) => result[column]);
};


app.get('/oogkleur', (req, res) => {
  const hexvalues = getData(dataset, 'oogKleur');

  const lookuptable = {
    'blauw': '#0000FF',
    'lichtblauw': '#ADD8E6',
    'bruin': '#A52A2A',
    'groen': '#83f52c',
    'rood': '#FF0000',
    'zwart': '#000000',
    'geel': '#FFFF00',
    'legergroen': '#4B5320',
    'staal': '#808080',
    'grijs': '#666666',
  };

  const lookupColor = (string) => {
    return lookuptable[string.toLowerCase()];
  };

  // https://github.com/Vuurvos1/functional-programming/blob/79e207836da26f8c7d9f264391db0ae1f25d9008/index.js#L35-L52
  // https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes/24390910
  const convertRGBtohex = (rgb) => {
    // remove unnecessary symbols
    let color = rgb.replace(/\./g, ',').replace(/[a-z\(\)]/g, '');
    // convert values to array
    color = color.split(',', 3);

    // make sure value is inside valid range
    color.map((el) => el = Math.min(255, Math.max(0, el)));

    // this has to be in a for loop for some reason
    for (let i = 0; i < color.length; i++) {
      color[i] = (+color[i]).toString(16).padStart(2, '0');
    }

    // create hex value
    color = `#${color.join('')}`;
    return color;
  };


  const convert = hexvalues
      .map((hexvalue) => {
        hexvalue = hexvalue
            .replace(/\s/g, ''); // s --> space //g --> replace globally

        if (hexvalue.match(/#[0-9A-Fa-f]{6}/g)) { // If color matches hex pattern
          return hexvalue;
        } else if (hexvalue.toLowerCase() in lookuptable) { // Lookup the color
          const lookup = lookupColor(hexvalue);
          return lookup;
        } else if (hexvalue.includes('rgb')) {
          const rgbvalue = convertRGBtohex(hexvalue);
          return rgbvalue;
        } else {
          hexvalue = `#${hexvalue}`;
          if (hexvalue.match(/#[0-9A-Fa-f]{6}/g)) {
            return hexvalue;
          } else {
            return undefined;
          }
        }
      });

  console.log(convert);
  return res.json(convert);
});

app.get('/bedtijd', (req, res) => {
  const bedtijden = dataset
      .map((convertime) => {
        return moment(`${convertime.bedtijd}`, ['h:mm A']).format('HH:mm');
      });

  return res.json(bedtijden);
});


app.get('/automerken', (req, res) => {
});


app.listen(port, () => console.log(`app listening at http://localhost:${port}`));


