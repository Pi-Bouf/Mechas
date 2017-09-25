var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("GROS PD");
});

module.exports = router;