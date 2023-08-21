import userService from './service.users.js';

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

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ "message": "user not found" })
        }
    } catch (error) {
        console.error(error)
    }
};


const createProduce = async (req, res) => {
    try {
        const newUser = req.body;
        const createdUser = await userService.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error Produce not created" });
    }
};

const updateProduce = async (req, res) => {
    try {
        const newUser = req.body;
        newUser.id = Number(
            params.id)
        const updatedUser = await userService.updateUser(newUser);
        res.status(201).json(updatedUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error Produce not created" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const newUser = parseInt(req.params.id);
        const deleteUser = await userService.deleteUser(newUser);
        res.status(201).json(deleteUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error Produce not created" });
    }
};

const userControler = {
    getAllUsers,
    getUserById,
    createProduce,
    deleteProduct,
    updateProduce
};

export default userControler;













