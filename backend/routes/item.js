const express = require('express');
const router = express.Router();

// test route to make sure router works
router.get('/test', (req, res) => res.send('Items route works!'));

module.exports = router;
