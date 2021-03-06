module.exports = function(strings) {
    var charArray = [];
    var length = strings[0].split('').length;

    for (i=0;i<strings.length;i++) {
        charArray = charArray.concat(strings[i].split(''));
    }

    for (i=0;i<length;i++) {
        var clone = charArray.slice();
        var found = []
        for(j=i;j<clone.length;j+=length-1) {
            clone.splice(j, 1);
        }

        for(j=0;j<clone.length;j+=length-1) {
            var check = clone.slice(j, j + length - 1).join('');
            if (found.includes(check)) {
               return check;
            }
            found.push(check);
        }
    }

};
