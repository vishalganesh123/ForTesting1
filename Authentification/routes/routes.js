import express from 'express';

import{ createStudentControllerFn } from '../src/student/studentController.js'
var userController = createStudentControllerFn;//require('../src/student/studentController');
const router = express.Router();

router.route('./student/login').post(userController.loginUserControllerFn);
router.route('./student/create')



module.exports = router;