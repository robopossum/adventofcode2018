module.exports = function (string) {
    string = string.pop();
    var regexStr = '(';
    for(i=0;i<26;i++) {
        let letter = String.fromCharCode(97 + i);
        regexStr += letter + letter.toUpperCase() + '|' + letter.toUpperCase() + letter + '|';
    }
    var regex = new RegExp(regexStr.substring(0, regexStr.length - 1) + ')', 'g');
    var last;
    while (last !== string ) {
        last = string;
        string = string.replace(regex, '');
    }
    return string.length;
};
