import { Router } from "express";
import { deleteEmployee, createEmployee, getEmployees, updateEmployee, getEmployee} from '../controllers/employees.controller.js'


const router = Router ()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee)

router.put('/employees', updateEmployee)

router.delete('/employees', deleteEmployee)

export default router