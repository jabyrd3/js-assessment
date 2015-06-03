exports = (typeof window === 'undefined') ? global : window;
exports.asyncAnswers = {
    async: function (value) {
        var defer = $.Deferred();
        defer.resolve(value);
        return defer;
    },
    manipulateRemoteData: function (url) {
        var defer = $.Deferred();
        $.ajax('/data/testdata.json').done(function (data) {
            var filtered = _.chain(data.people).sortBy('name').pluck('name').value();
            defer.resolve(filtered);
        });
        return defer;
    }
};
