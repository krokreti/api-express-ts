import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes';

const port = 3002;
const uri = 'mongodb+srv://<login>:<password>@cluster0.ijzar44.mongodb.net/?retryWrites=true&w=majority';
const app = express();

app.use(json());
app.use(express.json());
app.use(cors());
app.use(router);

mongoose.set('strictQuery', false);
mongoose.connect(uri).then(_ => {
    app.listen(port, () => {
        console.log('Aplicação rodando na porta ' + port);
    })
}).catch(err => {
    console.log(err);
})
