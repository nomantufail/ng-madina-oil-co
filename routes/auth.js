/**
 * Created by noman_2 on 12/8/2015.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.send({
        token:"kdjslfjkldjfjdskjf89789sdfjkl_$%lkjsdkf"
    });
});

module.exports = router;
