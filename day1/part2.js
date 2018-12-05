module.exports = function (instructions) {
    var output = 0;
    var outputs = [0];
    var index = 0;
    while (true) {
        output = eval(output + instructions[index]);
        if (outputs[output] !== undefined) {
            return output;
        } else {
            outputs[output] = output;
        }
        index = index < instructions.length - 1 ? index + 1 : 0;
    }
};
