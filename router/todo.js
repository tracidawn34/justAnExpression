const express = require('express')
const router = express.Router()
const uuidv4 = require("uuid").v4   

let todos = [
    {
      id: "haf24jd",
      todo: "do laundry",
      done: "false"
    },
    {
      id: "jp2nkl2",
      todo: "wash dishes",
      done: "true"   
    }
  ]

router.get('/get-all-todos', (req, res)=>{
    res.json(todos)   
})

router.get('/get-todo-by-id/:id', (req, res)=>{  
   const {id} = req.params
   const foundId = todos.find(item =>{return item.id === id})
   if(foundId){
    res.json(foundId)
}else{
    res.json({message: "The Todo ID you are looking for does not exist, please check the ID"})
   }
})

router.get('/get-todos-by-done/:done', (req, res)=>{
    const {done} = req.params
    const newDoneArray = todos.filter(item => item.done === done)
    res.json(newDoneArray)  
})

router.post('/create-new-todo', (req,res)=>{
    const {todo} = req.body
    const newTodo = {
        todo, 
        id: uuidv4(), 
        done: "false"
    }
    todos.push(newTodo)
    res.json(todos)
})

module.exports = router