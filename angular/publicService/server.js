const express = require('express')


const app = express()
app.use(express.static(__dirname + '/publicService/dist/publicService'))
app.use(express.json())

app.get('/', (req, res)=>{

})

app.get('/tasks',(req, res)=>{
  console.log('received request /tasks')
  res.json([{name: 'doshes'}, {name: 'sweeping'}])
})

app.get('/kittens',(req, res)=>{
  console.log('received request /kittens')
  res.json([{name: 'charles'}, {name: 'charlie'},{name: 'tom'}, {name: 'cathy'},{name: 'elora'},{name: 'sithy'}])
})
app.listen(8000)
console.log("The server is running on : 8000")