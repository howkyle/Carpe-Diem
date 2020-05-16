const express = require("express");

const app = express();

app.get('/', (req, res) => {

});


const port = 4001;

app.listen(port, () => console.log(`listening on port:${port}`))