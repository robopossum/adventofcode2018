module.exports = function (instructions) {
    var output = 0;
    instructions.forEach(instruction => output = eval(output + instruction));
    return output;
};
