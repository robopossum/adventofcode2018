module.exports = function (instructions) {
    var output = 0;
    var outputs = [0];
    var repeat = 'false';
    var index = 0;
    while ( repeat === 'false') {
        output = eval(output + instructions[index]);
        if (outputs.includes(output)) {
            repeat = output;
        } else {
            outputs.push(output);
        }
        index += 1;
        if (index >= instructions.length) {
            index = 0;
        }
    }
    console.log(repeat);
};
