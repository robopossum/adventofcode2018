module.exports = function (string) {
    string = string.pop();
    var regexStr = '(';
    var strings = [];
    for(i=0;i<26;i++) {
        let letter = String.fromCharCode(97 + i);
        let uLetter = String.fromCharCode(65 + i);
        regexStr += letter + uLetter + '|' + uLetter + letter + '|';
        strings.push(string.replace(new RegExp('(' + letter + '|' + uLetter + ')', 'g'), ''));
    }
    var regex = new RegExp(regexStr.substring(0, regexStr.length - 1) + ')', 'g');
    var best = Infinity;
    for (i=0;i<strings.length;i++) {
        var last;
        while (last !== strings[i] ) {
            last = strings[i];
            strings[i] = strings[i].replace(regex, '');
        }
        best = strings[i].length < best ? strings[i].length : best;
    }
    return best;
};
