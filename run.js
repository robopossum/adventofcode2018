if (process.argv.length < 4) {
    console.error('Launch run.js like "node run.js <day> <part>"');
    process.exit();
}
var day  = process.argv[2];
var part = process.argv[3];
var input = process.argv[4] === 'test' ? 'test_input' : 'input';
var metrics = process.argv[4] === 'metrics';
if (!metrics) {
    console.log('Running Day ' + day + ' Part ' + part);
}

const fs = require('fs');

fs.readFile('./day' + day + '/' + input, 'utf8', function(err, contents) {
    var inputs = contents.split('\n');
    inputs.pop(); //Removes last blank line

    var script = require('./day' + day + '/part' + part + '.js');
    var start = Date.now();
    var result = script(inputs);
    var runtime = Date.now() - start;
    if (metrics) {
        console.log('' + day + ' | ' + part + ' | ' + runtime + 'ms');
    } else {
        console.log('Got result: ' + result + ' in ' + runtime + ' milliseconds');
    }
});
