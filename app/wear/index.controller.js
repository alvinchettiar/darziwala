(function () {
    'use strict';

    angular
        .module('app')
        .controller('Wear.IndexController', Controller);

//    function Controller(Wear) {
//        var wear_cat = this;
//
//        wear_cat.wear = null;
//
//        initController();
//
//        function initController() {
//            // get types of wear
//            Wear.GetCurrent().then(function (wear_cat) {
////                wear_cat.user = user;
////                wear_cat.user.account_type = user.account_type;
//            });
//        }
//    }

function Controller(UsersService) {
        var vm = this;

//        vm.user = null;

        initController();

        function initController() {
            // get types of wear
            UsersService.GetCurrent().then(function (user) {
//                vm.user = user;
//                vm.user.account_type = user.account_type;
            });
        }
    }

})();