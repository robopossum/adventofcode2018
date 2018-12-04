module.exports = function (actions) {
    actions.sort();

    var slpPatterns = {};
    var idRegex = /Guard #(\d+)/;
    var minRegex = /:(\d+)\]/;
    var curGuard, matches;

    for (i=0;i<actions.length;i++) {
        if ((matches = idRegex.exec(actions[i])) !== null) {
            curGuard = matches[1];
            slpPatterns[curGuard] = slpPatterns[curGuard] || [];
        } else if (actions[i].indexOf('falls') > -1) {
            sleepMin = minRegex.exec(actions[i])[1];
        } else {
            wakeMin = minRegex.exec(actions[i])[1];
            for (j=sleepMin;j<wakeMin;j++) {
                slpPatterns[curGuard][j] = slpPatterns[curGuard][j] ? slpPatterns[curGuard][j] + 1 : 1;
            }
        }
    }

    var sleepyMin = ['', '', -1];

    for (var id in slpPatterns) {
        for (i=0;i<slpPatterns[id].length;i++) {
            if (slpPatterns[id][i] > sleepyMin[2]) {
                sleepyMin = [id, i, slpPatterns[id][i]];
            }
        }
    }

    return sleepyMin[0] * sleepyMin[1];
};
