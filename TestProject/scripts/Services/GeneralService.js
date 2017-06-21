(function () {
    function GeneralService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    GeneralService.prototype.postData = function (url, params) {
        var p1 = this.$http.post(url, params)
           .then(function (response) {
               return response.data;
           });

        return p1;
    };

    GeneralService.prototype.getData = function (url, params) {
        var p1 = this.$http({
            url: url,
            method: "GET",
            params: params
        }).then(function (response) {
            return response.data;
        });

        return p1;
    };

    GeneralService.prototype.getDDL = function (tbl, removeItem) {
        var obj;
        var p1;

        obj = objDropDownLists[tbl];

        var promise;
        if (obj == undefined) {
            promise = this.$http({
                url: DATA_URL_PREFIX + "CodeTable/GetCodeTable",
                method: "GET",
                params: { tbl: tbl }
            }).then(function (response) {
                return setDdlData(response.data, removeItem);
            });
        } else {
            obj = setDdlData(obj, removeItem);
            promise = this.$q.when(obj);
        }

        return promise;
    }

    GeneralService.prototype.showPopUp = function (popUpName) {
        $('#' + popUpName + '.modal').modal("show").css({
            'left': function () { //Horizontal centering
                return -((screen.width - $(this).width) / 2);
            }
        });
    };
    
    angular.module("UsersApp").service("GeneralService",
        [
            "$http",
            "$q",
            GeneralService
        ]);
})();