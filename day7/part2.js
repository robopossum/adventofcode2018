module.exports = function (steps) {
    steps.sort();
    var objs = {};
    var regex = /Step ([A-Z]) must be finished before step ([A-Z]) can begin./;
    var workers = [0, 0, 0, 0, 0];
    var complete = {};
    for (i=0;i<steps.length;i++) {
        let matches = regex.exec(steps[i]);
        objs[matches[1]] = objs[matches[1]] || '';
        objs[matches[2]] = objs[matches[2]] || '';
        objs[matches[2]] = objs[matches[2]] + matches[1];
    }
    var deps = Object.assign({}, objs);
    var length = Object.keys(objs).length;
    var index;
    while (length > 0) {
        for (i=0;i<26;i++) {
            let letter = String.fromCharCode(65 + i);
            if (objs[letter] === '') {
                let req = deps[letter].split('');
                let start = 0;
                for (k=0;k<req.length;k++) {
                    start = complete[req[k]] > start ? complete[req[k]] : start;
                }

                index = 0;
                for (j=1;j<5;j++) {
                    index = workers[j] < workers[index] ? j : index;
                }
                workers[index] = start + 61 + i;
                complete[letter] = workers[index];
                delete objs[letter];
                length--;
                for(let key in objs) {
                    objs[key] = objs[key].replace(letter, '');
                }
                break;
            }
        }
    }
    return workers[index];
};
