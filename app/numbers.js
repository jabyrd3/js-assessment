exports = (typeof window === 'undefined') ? global : window;
exports.numbersAnswers = {
    valueAtBit: function (num, bit) {
        var bitString = this.convertToBinary(num);
        return parseInt(bitString.charAt(8 - bit), 10);
    },
    base10: function (str) {
        return parseInt(str, 2);
    },
    convertToBinary: function (num) {
        var bitString = (num).toString(2);
        while (bitString.length < 8) {
            bitString = '0' + bitString;
        }
        return bitString;
    },
    multiply: function (a, b) {
        var multiplier = 10000;
        var a = a * multiplier,
            b = b * multiplier;
        return a * b / (multiplier * multiplier);
    }
};
