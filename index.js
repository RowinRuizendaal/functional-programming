const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
require('dotenv').config();
const dataset = require('./dataset/Survey_Information_Design_clean-parsed.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/bedtijd', (req, res) => {
    const bedtijden = []

    for (let i = 0; i < dataset.length; i ++) {
        const number = moment(`${dataset[i].bedtijd}`, ["h:mm A"]).format("HH:mm");
        bedtijden.push(number)
    }
    return res.json(bedtijden)
  })

  app.get('/oogkleur', (req, res) => {
    // const hexvalues = dataset.map(hexvalue => {
        
    //     return hexvalue.oogKleur
    // })

    const hexvalues = dataset
    .filter(hexvalue => hexvalue.oogKleur.match( /[0-9A-Fa-f]{6}/g))
    .map(hexvalue => {
        
        if (!hexvalue.oogKleur.startsWith('#')) { //Place a # for every string
            hexvalue.oogKleur = `#${hexvalue.oogKleur}`
        }

            if (hexvalue.oogKleur.includes(' ')) { // detect space
            hexvalue.oogKleur = hexvalue.oogKleur.replace(/\s/g,'') //s --> space //g --> replace globally
        }

        return hexvalue.oogKleur
    })

    console.log(hexvalues)
    return res.json(hexvalues)
})




app.listen(port, () => console.log(`app listening at http://localhost:${port}`))