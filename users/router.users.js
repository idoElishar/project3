import express from 'express';
import userControler from './controller.users.js'

const router = express.Router()

// GET localhost:8200/api/users/
router.get('/', userControler.getAllUsers)

// GET localhost:8020/api/users/8
router.get('/:id', userControler.getUserById)

router.post("/", userControler.createProduce);

router.delete("/:id", userControler.deleteProduct);

router.put("/:id", userControler.updateProduce);


// POST localhost:8020/api/users/
//router.post('/', userControler.addUser)

// PUT localhost:8020/api/users/
//router.put('/', userControler.addUser)

// DELETE localhost:8020/api/users/
//router.delete('/', userControler.addUser)

export default router;