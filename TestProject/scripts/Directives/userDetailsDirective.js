UsersApp.directive('userDetails', function ($compile, GeneralService, $route) {
    return {
        templateUrl: "User/UserDetails",
        controller: function ($scope) {

        },
        link: function (scope, element, attrs) {
         

        },
        scope: {
            user: "="
        },
    }
});

//# sourceURL=userDetailsDirective.js