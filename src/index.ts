import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const port = 3002;
const uri = 'mongodb+srv://krokreti:caramujo123@cluster0.ijzar44.mongodb.net/?retryWrites=true&w=majority';
const app = express();

app.use(json());
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect(uri).then(result => {
    console.log(result);
    app.listen(port, () => {
        console.log('Aplicação rodando na porta ' + port);
    })
}).catch(err => {
    console.log(err);
})
