const fs = require('fs');

fs.readFile('input', 'utf8', function (err, contents) {
    var strings = contents.split('\n');
    strings.pop();

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var i = 0;
    var twos = [];
    var threes = [];

    while (i < strings.length) {
        var two = false;
        var three = false;
        for (j = 0; j < alphabet.length; j++) {
            var count = (strings[i].match(new RegExp(alphabet[j], 'g')) || []).length;
            if (count === 2 && !two) {
                twos.push(strings[i]);
                two = true;
            } else if (count === 3 && !three) {
                threes.push(strings[i]);
                three = true;
            }
            if (two && three) {
                break;
            }
        }
        i += 1;
    }
    console.log(twos.length * threes.length);
});