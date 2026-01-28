import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors);

// Permite envio de dados em formato JSON
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// Define a porta em que a aplicação vai rodar atráves de .env. Caso não tenha a porta default é a 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})