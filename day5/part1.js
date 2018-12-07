module.exports = function (string) {
    string = string.pop();
    var react = (str) => {
        for (i=0;i<str.length;i++) {
            if (Math.abs(str.charCodeAt(i) - str.charCodeAt(i+1)) === 32) {
                str = str.slice(0, i) + str.slice(i+2);
                i = i === 0 ? i - 1 : i - 2;
            }
        }
        return str;
    };
    return react(string).length;
};
