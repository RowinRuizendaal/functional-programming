
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(require('./routes/router'));


app.listen(port, () => console.log(`app listening at http://localhost:${port}`));
