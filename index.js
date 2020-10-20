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
    const empty = []

    for (let i = 0; i < dataset.length; i ++) {
        const number = moment(`${dataset[i].bedtijd}`, ["h:mm A"]).format("HH:mm");
        empty.push(number)
    }
    return res.json(empty)
  })

  app.get('/oogkleur', (req, res) => {
    const hexvalues = []

    for (let i of dataset) {
        if (!i.oogKleur.startsWith('#')) {
            i.oogKleur = `#${i.oogKleur}`
        }
        if (i.oogKleur.match( /[0-9A-Fa-f]{6}/g) && i.oogKleur.startsWith('#')) {
            if (i.oogKleur.startsWith('# ')) {
                i.oogKleur = i.oogKleur.replace(/\s/g,'') //s --> space //g --> replace globally
            }
            hexvalues.push(i.oogKleur)
        } else {
            console.log(`${i.oogKleur} is not a valid hexcolor`)
        }
    }
    console.log(hexvalues)
    return res.json(hexvalues)
  })


app.listen(port, () => console.log(`app listening at http://localhost:${port}`))