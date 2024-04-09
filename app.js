const express = require('express')
const logger = require('morgan')
const app = express()
const indexRouter = require('./routes/index/indexRouter')
const todoRouter = require('./routes/todos/todoRouter')

app.use(logger('dev'))
app.use(express.json())


app.use("/", indexRouter)
app.use("/api/todo/", todoRouter)

app.listen(3000, ()=>{
    console.log("Server started on port 3000")
})



module.exports = app