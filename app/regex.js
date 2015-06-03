exports = (typeof window === 'undefined') ? global : window;
exports.regexAnswers = {
    containsNumber: function (str) {
        var regex = /\d/;
        return regex.test(str);
    },
    containsRepeatingLetter: function (str) {
        var regex = /([A-z])\1+/;
        return regex.test(str);
    },
    endsWithVowel: function (str) {
        var regex = /[aeiouAEIOU]$/;
        return regex.test(str);
    },
    captureThreeNumbers: function (str) {},
    matchesPattern: function (str) {},
    isUSD: function (str) {}
};
