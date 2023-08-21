import express from 'express';
import userControler from './controller.persons.js'
const router = express.Router()
router.post("/", userControler.createUser);
router.get('/', userControler.getAllUsers)
router.get('/login', userControler.getUserByData)

// console.log(__dirname)

export default router;
