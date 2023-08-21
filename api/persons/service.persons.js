import userDal from './dal.persons.js';

const createUser = async (user) => {
    return userDal.createUser(user);
};



const getUsers = async () => {
    try {
        const users = await userDal.getUsers();
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};


const getUserByData = async (data) => {
    try {
        const users = await userDal.getUserByData(data);
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const userService = {
    createUser,getUsers,getUserByData
};

export default userService;