const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis/index.js');

router.get('/', async (req, res) => {
    const count = await getAsync('added_todos');
    res.json({
        addedTodos: count ? parseInt(count) : 0
    })
})

module.exports = router;