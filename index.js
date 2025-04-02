import express from 'express';
import bodyParser from "body-parser";

const app = express()
const jsonParser = bodyParser()

app.listen(8080, () => {
    console.log("Listening on port 8080");
})


let userInput = "2 + 2";
eval(userInput); //