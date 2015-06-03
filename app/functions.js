exports = (typeof window === 'undefined') ? global : window;
exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(this, arr);
    },
    speak: function (fn, obj) {
        return fn.call(obj);
    },
    functionFunction: function (str) {
        var curry = function (input) {
            return str + ', ' + input;
        }
        return curry;
    },
    makeClosures: function (arr, fn) {
        var response = [];
        var factory = function (input) {
            return function (input) {
                return fn(input);
            };
        };
        for (x in arr) {
            response.push(factory(arr[x]));
        }
        return response;
    },
    partial: function (fn, str1, str2) {
        return function (input) {
            return fn(str1, str2, input);
        }
    },
    useArguments: function () {},
    callIt: function (fn) {},
    partialUsingArguments: function (fn) {},
    curryIt: function (fn) {}
};
