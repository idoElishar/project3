import userDal from './dal.users.js';

const getUsers = async () => {
    try {
        const users = await userDal.getUsers();
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getUserById = async (id) => {
    try {
        const user = await userDal.getUserById(id);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const createUser = async (user) => {
    return userDal.createUser(user);
};


const deleteUser = async (id) => {
    try {
        const user = await userDal.deleteUser(id);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};


const updateUser = async (updatedUser) => {
    try {
        const user = await userDal.updateUser(updatedUser);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};



const changeUserBy1 = async (id) => {
    try {
        const user = await userDal.changeUserBy1(id);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};


const userService = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    changeUserBy1
};

export default userService;