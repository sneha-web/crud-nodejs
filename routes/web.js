import express from "express";
const router = express.Router();
import Employeecontroller from "../controllers/Employeecontroller.js"

router.get('/', Employeecontroller.getAllDoc);
router.post('/', Employeecontroller.createDoc);
router.get('/edit/:id', Employeecontroller.editDoc);
router.post('/update/:id', Employeecontroller.updateDocById);
router.post('/delete/:id', Employeecontroller.deleteDocById);

export default router;