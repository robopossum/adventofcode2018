module.exports = function (string) {
    string = string.pop();
    var regexStr = '(';
    for(i=0;i<26;i++) {
        let letter = String.fromCharCode(97 + i);
        let uLetter = String.fromCharCode(65 + i);
        regexStr += letter + uLetter + '|' + uLetter + letter + '|';
    }
    var regex = new RegExp(regexStr.substring(0, regexStr.length - 1) + ')', 'g');
    var last;
    while (last !== string ) {
        last = string;
        string = string.replace(regex, '');
    }
    return string.length;
};
