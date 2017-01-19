/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var config = require('config.json');
var express = require('express');
var router = express.Router();
var wearService = require('services/wearcategory.service');

//router.get('/current', getAllWearType);
router.get('/wear-gender', getAllWearType);

module.exports = router;

function getAllWearType(req, res){
//    console.log(res);
//    res.send("SENDING RES");
//    wearService.getAllWearTypeService(function(err){
//        res.status(401).send("SENDING RES");
//        console.log(req);
//    });
        wearService.getAllWearTypeService("female")
            .then(function(data){
                console.log(data);
//            if (token) {
//                // authentication successful
//                res.send({ token: token });
//            } else {
                // authentication failed
                res.status(401).send('Username or password is incorrect');
//            }
//                res.send("SENDING RES");
            })
            .catch(function(err){
                res.status(400).send(err);
            });

//        userService.authenticate(req.body.username, req.body.password)
//        .then(function (token) {
//            if (token) {
//                // authentication successful
//                res.send({ token: token });
//            } else {
//                // authentication failed
//                res.status(401).send('Username or password is incorrect');
//            }
//        })
//        .catch(function (err) {
//            res.status(400).send(err);
//        });

}