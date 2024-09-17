const express = require('express');
const Studentcontroller = require('../controllers/studentcontroller')
const router = express.Router();

router.post('/add/user',(req,res)=>{
Studentcontroller.addStudent(req,res)
})
router.get('/users',(req,res)=>{
    Studentcontroller.getStudents(req,res)
})
router.get('/user/:rollNo',(req,res)=>{
    Studentcontroller.getStudentsbyrollNo(req,res)
})
module.exports= router