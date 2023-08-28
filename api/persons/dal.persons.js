import fs from 'fs';
import fss from "fs/promises";
import { promisify } from 'util';


const USERS_FILE_PATH = "./dataPerson.json";
const readUsersFromFile = async () => {
    const data = await fss.readFile(USERS_FILE_PATH, "utf8");
    return JSON.parse(data);
};
const writeUsersToFile = async (users) => {
    const updatedDataJSON = JSON.stringify(users);
    await fss.writeFile(USERS_FILE_PATH, updatedDataJSON, "utf8");
};



const createUser = async (user) => {
    const users = await readUsersFromFile();
    console.log(user.email)
    if (!users.some(person => person.email === user.email)) {
        users.push(user);
        await writeUsersToFile(users);
        return user;
    }
    // else {
    //     res.json({ "error": 'Error mail exists' });
    // }
};

const getUsers = async (req, res) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./dataPerson.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        return jsonData;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};




const getUserByData = async (data) => {
    try {
        const readFileAsync = promisify(fs.readFile);
        const dataAsync = await readFileAsync('./dataPerson.json', 'utf8');
        const jsonData = JSON.parse(dataAsync);

        const user = jsonData.find(person =>
            data.email === String(person.email) &&
            data.id === Number(person.id) &&
            data.password === String(person.password)
        );
        console.log("dasda")
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err; // יש לזרוק את השגיאה הלאה כדי שהיא תיתפס במקום הקריאה לפונקציה.
    }
};


const userDal = {
    createUser,
    getUsers,
    getUserByData
};
export default userDal;