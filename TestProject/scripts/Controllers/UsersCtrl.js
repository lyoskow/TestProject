(function () {

    function UsersCtrl($scope, GeneralService, $rootScope, $http, $routeParams, $location) {

        $scope.lstTabs = ['רשימת משתמשים', 'משתמש חדש', 'עדכון משתמש'];
        $scope.updateUser = new Object();

        $scope.setSelectes = function (index) {
            $scope.selectedTab = index;

            switch (index) {
                case 1:
                    {
                        
                    }                   
                    break;
                case 2:
                    $scope.newUser = new Object();
                    break;
                case 3:
                    $scope.updateUser = new Object();
                    break;
            }
        }
       
        GeneralService.getData("List/GetUserList")
                            .then(function (data) {
                                $scope.data = data;
                            });

        $scope.editUserDatils = function (useDetails) {
            $scope.updateUser = useDetails;
        }
        
        $scope.setSelectes(1);

        $scope.updateUserDetails = function () {
            if ($scope.frmUpdate.$valid) {
                GeneralService.postData("List/UpdateUserDetails", $scope.updateUser)
               .then(function (data) {
                   $scope.frmUpdate.$submitted = false;
                   $scope.data = data;
                   $scope.setSelectes(1);
               });
            }
        }

        $scope.insertUserDetails = function () {
            if ($scope.frmInsert.$valid) {
                GeneralService.postData("List/InsertUserDetails", $scope.newUser)
               .then(function (data) {
                   $scope.frmInsert.$submitted = false;
                   $scope.data = data;
                   $scope.setSelectes(1);
               });
            }
        }


    }

    UsersApp.controller("UsersCtrl",
        [
            "$scope",
            "GeneralService",
            "$rootScope",
            "$http",
            "$routeParams",
            "$location",
            UsersCtrl
        ]);
})();
//# sourceURL=UsersCtrl.js