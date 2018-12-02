const fs = require('fs');

fs.readFile('day1_input', 'utf8', function(err, contents) {
    var instructions = contents.split('\n');
    instructions.pop();
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
});
