import express from 'express';
import { client } from '../mongodb.mjs'

const db = client.db("aggregation")
const users = db.collection("users")
const authors = db.collection("authors")
const books = db.collection("books")

let router = express.Router()

// $or ====> or-operator
router.get('/or-operator', async (req, res) => {

    const result = await users.find({ $or: [{ age: { $lte: 25 } }, { age: { $gte: 40 } }] })
        .project({ name: 1, age: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $and ====> and-operator
router.get('/and-operator', async (req, res) => {

    const result = await users.find({ $and: [{ age: { $lte: 35 } }, { favoriteFruit: { $eq: "banana" } }] })
        .project({ name: 1, age: 1, favoriteFruit: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $nor ====> nor-operator
router.get('/nor-operator', async (req, res) => {

    const result = await users.find({
        $nor: [
            { age: { $lte: 25 } },
            { age: { $gte: 40 } },
        ]
    })
        .project({ name: 1, age: 1 })
        .limit(10)
        .toArray();

    res.send({
        message: "data fetched",
        data: result
    });

});

// $not ====> not-operator
router.get('/not-operator', async (req, res) => {

    const result = await users.find({ 
        age: { 
            $not: { $lte: 25 } 
        } 
    })
    .project({ name: 1, age: 1 })
    .limit(10)
    .toArray();

    res.send({
        message: "data fetched",
        data: result
    });

});


export default router