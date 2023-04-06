const express = require('express');
const mongoose = require('mongoose');
const empModel = require('./model');
// var cors = require('cors');

const app = express();

app.use(express.json())
// app.use(cors());


app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET,DELETE")

    next();
})
//Route
app.get('/', (req, res)=>{
    res.send('<h1>Hello Siri...</h1>')
})



//create an entry
app.post('/employee', async(req, res)=>{
    try{
        const employee = await empModel.create(req.body);
        res.status(200).json(employee);
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
});

//Fetch all employees data
app.get('/employees', async(req, res)=>{
    try{
        const employees = await empModel.find();
        res.status(200).json(employees)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
});

//fetch employee data by ID
app.get('/employee/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const employee = await empModel.findById(id);
        res.status(200).json(employee)
    }catch(error){
        console.log(error.message);
        res.send(500).json({message:error.message})
    }
});

//update or edit employee data
app.put('/employee/:id', async(req, res)=>{
    try{
        const{id} = req.params;
        const employee = await empModel.findByIdAndUpdate(id, req.body);
        if(!employee){
            res.status(404).json({message:'employee not found'})
        }
        const upDatedEmp = await empModel.findByIdAndUpdate(id, req.body);
        res.status(200).json(upDatedEmp);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

//delete employee details
app.delete('/employee/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const employee = await empModel.findByIdAndDelete(id);
        if(!employee){
            res.status(404).json({message:'employee not found'})
        }
        res.status(200).json({message:'Successfully Deleted'})
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})



mongoose.connect('mongodb+srv://sireesha:sireesha@cluster0.5htup6m.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("DB connected...."))
.catch(err => console.log(err));


app.listen(4000, ()=>console.log("server is running siri..."))