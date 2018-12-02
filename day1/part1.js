const fs = require('fs');

fs.readFile('day1_input', 'utf8', function(err, contents) {
    var instructions = contents.split('\n');
    var output = 0;
    instructions.forEach(function(instruction) {
        output = eval(output + instruction);
    });
    console.log(output);
});
