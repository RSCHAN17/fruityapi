const Fruit = require('../models/Fruit')
// ! INDEX

const index = async (req, res) => {
    try {
        const fruits = Fruit.showAll()
        res.status(200).send(fruits)
    } catch (err) {
        res.status(500).send({'Error':'Server error'})
    }

}
// ! SHOW

const show = async (req,res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        res.status(200).send(fruit)
    } catch (err) {
        res.status(404).send({'Error':'Fruit not found'})
    }
}

const create = async (req, res) => {
    try {
        const fruitData = req.body
        const newFruit = await Fruit.create(fruitData)
        res.status(201).send(newFruit)
    } catch (err) {
        res.status(409).send('Not able to add Fruit')
    }
}

const update = async (req,res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        const result = await fruit.update(req.body)
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send('No fruit with that name found')
    }
}


const destroy = async (req,res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        const result = await fruit.destroy()
        res.sendStatus(204)
    } catch (err) {
        res.status(404).send('You can\'t delete what doesn\'t exist')
    }
}



module.exports = {
    index, show, create , update , destroy
}