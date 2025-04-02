import express from 'express';
import bodyParser from "body-parser";

const app = express()
const jsonParser = bodyParser()

app.listen(8080, () => {
    console.log("Listening on port 8080");
})
