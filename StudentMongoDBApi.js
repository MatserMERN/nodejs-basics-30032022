const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const Student = require("./models/student")
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/studentdb", (err) => {
    if(err){
        throw err
    } else {
        console.log(`Connected to MongoDB Sucessfully !!!`)
    }
})

router.get("/", function(req, res){
    res.send("Welcome to MongoDB API")
})

router.get("/students", (req, res) =>{
    Student.getStudents(function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.get("/students/:id", (req, res) => {
    const studentId = req.params.id
    Student.getStudentById(studentId, (err, data) => {
        if(err){
            throw err
        }
        res.json(data)
    }) 
})

router.post("/students", (req, res) => {
    const student = req.body
    Student.createStudent(student, (err, data)=>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.put("/students/:id", (req, res) => {
    const studentId = req.params.id
    const student = req.body
    Student.updateStudent(studentId, student, (err, data)=>{
        if(err){
            throw err
        } 
        res.json(data)
    })
})

router.delete("/students/:id", (req, res) => {
    const studentId = req.params.id

    Student.deleteStudent(studentId, (err, data) => {
        if(err){
            throw err
        }
        res.json(data)
    })
})

const PORT = 3001

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})