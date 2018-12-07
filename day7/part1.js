module.exports = function (steps) {
    steps.sort();
    var objs = {};
    var regex = /Step ([A-Z]) must be finished before step ([A-Z]) can begin./;
    for (i=0;i<steps.length;i++) {
        let matches = regex.exec(steps[i]);
        objs[matches[1]] = objs[matches[1]] || '';
        objs[matches[2]] = objs[matches[2]] || '';
        objs[matches[2]] = objs[matches[2]] + matches[1];
    }
    var order = '';
    var length = Object.keys(objs).length;
    while (length > 0) {
        for (i=0;i<26;i++) {
            let letter = String.fromCharCode(65 + i);
            if (objs[letter] === '') {
                delete objs[letter];
                order += letter;
                length--;
                for(let key in objs) {
                    objs[key] = objs[key].replace(letter, '');
                }
                break;
            }
        }
    }
    return order;
};
