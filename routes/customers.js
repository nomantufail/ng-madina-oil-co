/**
 * Created by noman_2 on 12/8/2015.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        customers:[
            {
                name:"Noman Tufail",
                phone:"03154379760",
                email:"nomantufail100@gmail.com",
                address:"Lahore, Punjab, Pakistan"
            },
            {
                name:"Noman Tufail",
                phone:"03154379760",
                email:"nomantufail100@gmail.com",
                address:"Lahore, Punjab, Pakistan"
            },
            {
                name:"Noman Tufail",
                phone:"03154379760",
                email:"nomantufail100@gmail.com",
                address:"Lahore, Punjab, Pakistan"
            },
            {
                name:"Noman Tufail",
                phone:"03154379760",
                email:"nomantufail100@gmail.com",
                address:"Lahore, Punjab, Pakistan"
            },
            {
                name:"Noman Tufail",
                phone:"03154379760",
                email:"nomantufail100@gmail.com",
                address:"Lahore, Punjab, Pakistan"
            }
        ]
    });
});

module.exports = router;
