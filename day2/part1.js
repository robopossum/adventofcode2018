module.exports = function (strings) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var twos = [];
    var threes = [];

    for (i=0;i<strings.length;i++) {
        var two = three = false;
        for (j=0;j<alphabet.length;j++) {
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
    }
    return twos.length * threes.length;
};
