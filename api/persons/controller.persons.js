import userService from './service.persons.js';

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const createdUser = await userService.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error Produce not created" });
    }
};


const getAllUsers = async (req, res) => {
    try {
        console.log("getAllUsers")
        const users = await userService.getUsers();
        if (users.length > 0)
            return res.status(200).json(users)
        else {
            return res.status(404).json({ "message": "No Users" })
        }
    } catch (error) {
        console.error(error)
    }
};


const getUserByData = async (req, res) => {
    try {
        const id  = req.body;
        console.log(typeof(id))
        const user = await userService.getUserByData(id);
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ "message": "user not found" })
        }
    } catch (error) {
        console.error(error)
    }
};

const userControler = {
    createUser,getAllUsers,getUserByData
};

export default userControler;