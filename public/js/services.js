/* global angular */

angular.module('skeleton').service('skeletonService', function($http, $q) {

    return ({
        temp: temp,

    });

    function temp() {

        var request = $http({
            method: "get",
            url: "",

        });
        return (request.then(handleSuccess, handleError));

    }

    function temp() {

        var request = $http({
            method: "post",
            url: "",
            data: {
                temp: temp
            }
        });
        return (request.then(handleSuccess, handleError));

    }

    function handleError(response) {
        if (!angular.isObject(response.data) || !response.data.message) {
            return ($q.reject("An unknown error occured"));
        }

        return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
        return (response.data);
    }
});
