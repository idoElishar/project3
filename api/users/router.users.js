import express from 'express';
import userControler from './controller.users.js'

const router = express.Router()

router.get('/', userControler.getAllUsers)

router.get('/:id', userControler.getUserById)

router.post("/", userControler.createProduce);

router.delete("/:id", userControler.deleteProduct);

router.put("/:id", userControler.updateProduce);
router.patch("/:id", userControler.changeUserBy1)


export default router;