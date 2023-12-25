const express = require('express');
const router = express.Router();

// Define a middleware that is specific to this router instance.
router.use((req, res, next) => {
    console.log('birds router got hit, time: ', Date.now());
    next();
});

// /birds route
router.get('/', (req, res) => {
    res.send('GET /birds route got hit!');
});

router.get('/about', (req, res) => {
    res.send('GET /birds/about route got hit!');
});

module.exports = router;
