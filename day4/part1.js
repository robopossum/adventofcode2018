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

    var sleepy = ['', 0];

    for (var id in slpPatterns) {
        slept = slpPatterns[id].reduce((a,b) => a + b, 0);
        if (slept > sleepy[1]) {
            sleepy = [id, slept];
        }
    }

    var sleepyMin = ['', -1];

    for (i=0;i<slpPatterns[sleepy[0]].length;i++) {
        sleepyMin = slpPatterns[sleepy[0]][i] > sleepyMin[1] ? [i, slpPatterns[sleepy[0]][i]] : sleepyMin;
    }

    return sleepy[0] * sleepyMin[0];
};
