import express from 'express';
import { client } from '../mongodb.mjs'

const db = client.db("aggregation")
const users = db.collection("users")
const authors = db.collection("authors")
const books = db.collection("books")

let router = express.Router()

// $eq ====> equal
router.get('/equal', async (req, res) => {

    const result = await users.find({ favoriteFruit: { $eq: "banana" } })
        .project({ name: 1, favoriteFruit: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $ne ====> not-equal
router.get('/not-equal', async (req, res) => {

    const result = await users.find({ favoriteFruit: { $ne: "strawberry" } })
        .project({ name: 1, favoriteFruit: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $lt ====> less-than
router.get('/less-than', async (req, res) => {

    const result = await users.find({ age: { $lt: 25 } })
        .project({ name: 1, age: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $gt ====> greater-than
router.get('/greater-than', async (req, res) => {

    const result = await users.find({ age: { $gt: 25 } })
        .project({ name: 1, age: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $lte ====> less-than-equals
router.get('/less-than-equals', async (req, res) => {

    const result = await users.find({ age: { $lte: 25 } })
        .project({ name: 1, age: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $gte ====> greater-than-equals
router.get('/greater-than-equals', async (req, res) => {

    const result = await users.find({ age: { $gte: 34 } })
        .project({ name: 1, age: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $in ====> in-array
router.get('/in-array', async (req, res) => {

    // enim or id if any one present in tags array
    const result = await users.find({ tags: { $in: ["enim", "id"] } })
        .project({ name: 1, tags: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

// $nin ====> not-in-array
router.get('/not-in-array', async (req, res) => {

    // none of them is present in tags array
    const result = await users.find({ tags: { $nin: ["enim", "id"] } })
        .project({ name: 1, tags: 1 }).limit(10).toArray()

    res.send({
        message: "data fetched",
        data: result
    })

})

export default router