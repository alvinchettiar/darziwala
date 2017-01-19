/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var config = require('config.json');
//var _ = require('lodash');
//var jwt = require('jsonwebtoken');
//var Q = require('q');
//var mongo = require('mongoskin');
//var db = mongo.db(config.connectionString, { native_parser: true });
//db.bind('clothes_category');

//var service = {};
//
//service.getAllWearType = getAllWearType;
//
//module.exports = service;
//
//function getAllWearType(account_type){
//    var deferred = Q.defer();
//    
//    db.clothes_category.find({}, function(err, data){
//        if (err) {
//            deferred.reject(err.name + ': ' + err.message);
//        }
//        return deferred.promise(data);
//    });
//}

var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('clothes_category');

var service = {};

service.getAllWearTypeService = getAllWearTypeService;

module.exports = service;

function getAllWearTypeService(gender){
    var deferred = Q.defer();
    db.clothes_category.findOne({ gender : gender }, function(err, wear_category){
        if (err) {
            deferred.reject(err.name + ': ' + err.message);
        }
        else{
            deferred.resolve(wear_category);
        }
    });
    return deferred.promise;
}