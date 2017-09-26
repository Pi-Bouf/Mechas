var express = require('express');
var router = express.Router();

var user = null;

router.get('/:USER', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    userList.forEach(function(element) {
        if(element.name == req.params.USER) {
            res.send(element);
        }
    }, this);
});

module.exports = router;