/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    'use strict';
    
    angular
            .module('app')
            .factory('WearService', Service);
    
//    function Services($http, $q){
//        var service = {};
//        
//        
//        
////        service.getWearCatGender = getWearCatGender;
////        service.getWearAllCat = getWearAllGender;
////        
////        return service;
////        
////        function getWearCatGender(gender){
////            return $http.get('/api/wear/wear-gender').then(handleSuccess, handleError);
////        }
////        
////        function getWearAllGender(gender){
//////            return $http.get('/api/wear/wear-gender').then(handleSuccess, handleError);
////        }
////        
////        // private functions
////
////        function handleSuccess(res) {
////            return res.data;
////        }
////
////        function handleError(res) {
////            return $q.reject(res.data);
////        }
//    }

function Service($http, $q) {
        var service = {};

        service.GetWearGender = GetWearGender;
//        service.GetAll = GetAll;
//        service.GetById = GetById;
//        service.GetByUsername = GetByUsername;
//        service.Create = Create;
//        service.Update = Update;
//        service.Delete = Delete;

        return service;

        function GetWearGender() {
            return $http.get('/api/wear/wear-gender').then(handleSuccess, handleError);
        }

        function GetAll() {
            return $http.get('/api/users').then(handleSuccess, handleError);
        }

        function GetById(_id) {
            return $http.get('/api/users/' + _id).then(handleSuccess, handleError);
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError);
        }

        function Create(user) {
            return $http.post('/api/users', user).then(handleSuccess, handleError);
        }

        function Update(user) {
            return $http.put('/api/users/' + user._id, user).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/users/' + _id).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }
});

