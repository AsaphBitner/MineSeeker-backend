const dbService = require('./db-service')
// const ObjectId = require('mongodb').ObjectId

module.exports = {
    getInstructions,
    addObj,
}



async function getInstructions(){
    try {
        const collection = await dbService.getCollection('instructions')
        let instructions = await collection.find().toArray()[0]        
        return instructions    
    } 
    catch (err) {
        console.log(`ERROR: cannot find collection`)
        throw err
    }
}


async function addObj(obj) {
    try {
        const collection = await dbService.getCollection('instructions')
        const confirmation = await collection.insertOne(obj)
        return 'SUCCESS!'
    } catch (err) {
        console.log(`ERROR: cannot insert story`)
        throw err
    }
}






// async function getProductById(productId) {
//     try {
//         const collection = await dbService.getCollection('products')
//         const product = await collection.findOne({ _id: ObjectId(productId) })
//         return product
//     } catch (err) {
//         console.log(`ERROR: cannot find story ${storyId}`)
//         throw err
//     }
// }