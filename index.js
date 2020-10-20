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
    const empty = []
    const hashtag = []

    for (let i = 0; i < dataset.length; i ++) {
        const str = dataset[i].oogKleur.startsWith('#')
        if (!str) {
            console.log(dataset[i].oogKleur)
            hashtag.push(str)
        }
        empty.push(dataset[i].oogKleur)

    }
    console.log(hashtag.length)
    return res.json(empty)
  })


app.listen(port, () => console.log(`app listening at http://localhost:${port}`))