         
import { instructions } from './instructions-object'
const express = require('express')
const dataService = require('./services/data-service')
const app = express()
const port = process.env.PORT || 3001
var cors = require('cors')
app.use(cors())
app.use(express.static('public'))
app.use(express.json())



app.get('/instructions', async (req, res) => {
   try{
       let instructions = await dataService.getInstructions()
       res.send(instructions)
   }
catch (err) {
   console.log('Error! ', err)
   res.status(401).send('Sorry, error')
}

})


// function addToMongo(inst){
//    dataService.addObj(inst)
// }


// addToMongo(instructions)



