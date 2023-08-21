import express from 'express';
import personsRouter from './api/persons/router.persons.js';


const port = 3000;
const app = express();

app.use(express.json());

app.use('/persons/persons', personsRouter)

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});

