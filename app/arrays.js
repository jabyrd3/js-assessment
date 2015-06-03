exports = (typeof window === 'undefined') ? global : window;
exports.arraysAnswers = {
    indexOf: function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },
    sum: function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },
    remove: function (arr, item) {
        //backwards so vals don't shift
        var i = arr.length;
        //while for fun
        while (i > 0) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
            i--;
        }
        return arr;
    },
    removeWithoutCopy: function (arr, item) {
        //i did it right the first time
        return this.remove(arr, item);
    },
    append: function (arr, item) {
        arr.push(item);
        return arr;
    },
    truncate: function (arr) {
        arr.splice(arr.length - 1, 1);
        return arr;
    },
    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },
    curtail: function (arr) {
        arr.splice(0, 1);
        return arr;
    },
    concat: function (arr1, arr2) {
        var concatArray = arr1.concat(arr2);
        return concatArray;
    },
    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },
    count: function (arr, item) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) sum++;
        }
        return sum;
    },
    duplicates: function (arr) {
        var sortArray = arr.sort();
        var resultArray = [];
        for (var i = 0; i < sortArray.length; i++) {
            if (i !== 0 && arr[i] === arr[i - 1] && !_.includes(resultArray, arr[i])) resultArray.push(sortArray[i]);
        }
        return resultArray;
    },
    square: function (arr) {
        var i = 0;
        while (i < arr.length) {
            arr.splice(i, 1, arr[i] * arr[i]);
            i++;
        }
        return arr;
    },
    findAllOccurrences: function (arr, target) {
        var returnArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) returnArr.push(i);
        }
        return returnArr;
    }
};
