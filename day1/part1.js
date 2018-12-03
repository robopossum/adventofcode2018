module.exports = function (instructions) {
    var output = 0;
    instructions.forEach(function(instruction) {
        output = eval(output + instruction);
    });
    return output;
};
