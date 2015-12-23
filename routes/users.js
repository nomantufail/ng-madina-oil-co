var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    setTimeout(function() {
        res.send({
            users: [
                {
                    name: "noman tufail",
                    email: "nomantufail100@gmail.com"
                },
                {
                    name: "noman tufail",
                    email: "nomantufail100@gmail.com"
                },
                {
                    name: "noman tufail",
                    email: "nomantufail100@gmail.com"
                },
                {
                    name: "noman tufail",
                    email: "nomantufail100@gmail.com"
                },
                {
                    name: "noman tufail",
                    email: "nomantufail100@gmail.com"
                },
                {
                    name: "noman tufail",
                    email: "nomantufail100@gmail.com"
                },
                {
                    name: "noman tufail",
                    email: "nomantufail100@gmail.com"
                }
            ]
        });
    }, 2000);

});

module.exports = router;
