exports = (typeof window === 'undefined') ? global : window;
exports.recursionAnswers = {
    listFiles: function (data, dirName, files) {
        if (typeof files === 'undefined') {
            var localFiles = [];
        } else {
            var localFiles = files;
        }
        for (var i = 0; i < data.files.length; i++) {
            if (typeof data.files[i] === 'string') localFiles.push(data.files[i]);
            if (typeof data.files[i] === 'object') this.listFiles(data.files[i], '', localFiles);
        };
        return localFiles;
    },
    permute: function (arr) {},
    fibonacci: function (n) {
        var fib = [];
        var i = 0;
        while (fib.length < n) {
            if (i === 0 || i === 1) {
                fib.push(1);
            } else {
                fib.push(fib[i - 1] + fib[i - 2]);
            }
            i++;
        }
        return fib[n - 1];
    },
    validParentheses: function (n) {}
};
