module.exports = function (inputs) {
    var players = inputs[0];
    var last = inputs[1];
    var marbs = [0];
    var cur = 0;
    console.log(players, last);
    for(let i=1;i<=last;i++) {
        if (i % 23) {

        } else {
            cur = (cur + 1) % marbs.length;
            marbs.splice(cur, 0, i);
        }
    }
};
