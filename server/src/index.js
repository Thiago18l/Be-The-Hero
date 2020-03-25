const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;
/**
 *  express.json()
 *  para receber arquivos no formato .json
 */
app.use(express.json());
app.use(routes);
app.use(cors());


app.listen(PORT, () => {
    console.log(`Running the server on port ${PORT}`);
});