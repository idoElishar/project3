
import fs from 'fs';
import fss from "fs/promises";
import { promisify } from 'util';

const USERS_FILE_PATH = "./data.json";
const readUsersFromFile = async () => {
    const data = await fss.readFile(USERS_FILE_PATH, "utf8");
    return JSON.parse(data);
};
const writeUsersToFile = async (users) => {
    const updatedDataJSON = JSON.stringify(users);
    await fss.writeFile(USERS_FILE_PATH, updatedDataJSON, "utf8");
};

const updateUser = async (productForUpdate) => {
    const readFileAsinc = promisify(fs.readFile)
    const dataAsinc = await readFileAsinc('./data.json', 'utf8');
    const jsonData = JSON.parse(dataAsinc);
    let productIndex = jsonData.findIndex((product) => product.id === productForUpdate.id)
    if (productIndex === -1) {
        return false
    }
    jsonData[productIndex] = productForUpdate;
    await writeUsersToFile(jsonData);
    return productForUpdate
}



// const changeUserBy1 = async (id) => {
//     try {
//         const readFileAsinc = promisify(fs.readFile)
//         const dataAsinc = await readFileAsinc('./data.json', 'utf8');
//         const jsonData = JSON.parse(dataAsinc);
//         const user = jsonData.find(user => id === String(user.id));
//         return user;
//     } catch (err) {
//         console.error('Error reading data:', err);
//         res.send('Error reading data');
//     }
// };


const getUsers = async (req, res) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        
        return jsonData;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const getUserById = async (id) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        const user = jsonData.find(user => id === String(user.id));
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const deleteUser = async (userId) => {
    const users = await readUsersFromFile();
    const userIndex = users.findIndex((user) => user.id == userId);
    const deletedUser = users.splice(userIndex, 1)[0];
    await writeUsersToFile(users);
    return deletedUser;
};



const createUser = async (user) => {
    const users = await readUsersFromFile();
    users.push(user);
    await writeUsersToFile(users);
    return user;
};

const userDal = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};
export default userDal;






