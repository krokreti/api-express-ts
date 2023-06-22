import express from 'express';
import body from 'body-parser';
import cors from 'cors';

const port = 3002;

const app = express();

app.use(body.json());
app.use(express.json());
app.use(cors);

app.listen(port, () => {
    console.log('Aplicação rodando na porta ' + port);
})
