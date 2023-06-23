const express = require('express')

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

// app.use(morgan('tiny'));


//Routes


app.get('/',function(req,res){
    res.send('Welcome to an Awesome app about breads')
})


//BREADS ROUTES

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)




//LISTEN

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`)
})

