const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcrypt')
const {hash, genSalt} = require("bcrypt");

app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send(user.json);
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user === null) {
        return res.status(400).send('User not found')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success!');
        } else {
            res.send('Not allowed!');
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})