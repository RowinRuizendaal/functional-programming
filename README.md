# Functional-programming


## About

This is the reprository for cleaning the datavisualistaion students dataset formated in JSON, 

## Research question

How can you pay at a specific parking garage (by card, coins, banknotes, visa etc.)

 - Are there more parking garages where you can pay by card in 2020?
 - Are there still parking garages where you can pay by coins/banknotes

 ## Sub questions

- Are there parking areas where you can pay with cryptocoins?
- How far apart are the payment terminals in a particular parking area?
- Are the payment machines wheelchair-proof (height of machines)?
- Where can you still pay with cash at a payment terminal?
- How are the payment methods (cash, pin) distributed throughout the city? Center more pin options than outside the center?

## Datasets needed

 * https://data.overheid.nl/dataset/11389-open-data-parkeren--betaalmethode-gebied (areaid, paymentmethod)
 * https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg (not sure yet if I am going to use this one)
 * https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34 (areaid, Location, AreaDesc)
 * https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg (From peer-feedback)

The primary key (PK) in these datasets is : areaid, with this key I am able to find other datasets with this value to join each other

## Assumptions

- There are more parking spots where you can pay by card then with coins or banknotes
- Parking spots closer to the city centre have more payment options and are more expensive than ones further away


## Installing and using the project

**To run this project you need to have a dataset avaible in the directory**

dataset/some_dataset.json or change the:

```js
const dataset = require('./dataset/Survey_Information_Design_clean-parsed.json');
```

Located in index.js, for privacy reasons I am not allowed to share this one


### Install project

```
yarn install
```

### Compiles and hot-reloads for development
```
npm run dev || yarn nodemon
```


### Lints and fixes files

Fix all lint issues with just one command

```
npm run lint
```

### License

Authtor: [RowinRuizendaal](https://github.com/rowinruizendaal), license: [MIT](https://github.com/RowinRuizendaal/functional-programming/blob/Master/LICENSE)

