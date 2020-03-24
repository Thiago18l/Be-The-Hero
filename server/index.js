const express = require('express');

const app = express();
const PORT = process.env.PORT || 3333;
/**
 *  express.json()
 *  para receber arquivos no formato .json
 */
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        nome: 'THIAGO',
    })
});

app.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    return res.json({
        aluno: 'Thiago'
    })
});


app.listen(PORT, () => {
    console.log(`Running the server on port ${PORT}`);
});