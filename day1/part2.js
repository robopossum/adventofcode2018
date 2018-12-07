module.exports = function (instructions) {
    var output = 0;
    var outputs = {0:1};
    var len = instructions.length - 1;
    var i = 0;
    while (true) {
        output += eval(instructions[i]);
        if (outputs[output]) {
            return output;
        }
        outputs[output] = 1;
        i = i < len ? i+1 : 0;
    }
};
