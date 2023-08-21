import express from 'express';
import usersRouter from './users/router.users.js';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/', usersRouter)

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});


