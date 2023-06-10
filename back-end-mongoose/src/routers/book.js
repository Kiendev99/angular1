import express from 'express';
import {get,getAll,create,update,remove} from '../controllers/book'
import { checkPermission } from '../middlewares/checkPermission';

const router = express.Router()

router.get("/products",getAll)
router.post("/products",checkPermission,create)
router.get("/products/:id",get)
router.put("/products/:id",checkPermission,update)
router.delete("/products/:id",checkPermission,remove)

export default router