module.exports = function (points) {
    var regex = /\<\s*(-\d+|\d+),\s+(-\d+|\d+)\> velocity=\<\s*(-\d+|\d+),\s+(-\d+|\d+)\>/;
    var seconds = 3;
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    var sign = [];
    for(let i=0;i<points.length;i++) {
        let matches = regex.exec(points[i]);
        let posX = parseInt(matches[1]) + (seconds * parseInt(matches[3]));
        let posY = parseInt(matches[2]) + (seconds * parseInt(matches[4]));
        minX = posX < minX ? posX : minX;
        minY = posY < minY ? posY : minY;
        maxX = posX > maxX ? posX : maxX;
        maxY = posY > maxY ? posY : maxY;
        sign[posX] = sign[posX] || [];
        sign[posX][posY] = '#';
    }
    var out = ''
    for (let x=minX;x<=maxX;x++) {
        for (let y=minY;y<=maxY;y++) {
            out += sign[x] && sign[x][y] ? sign[x][y] : '.';
        }
        out += '\n';
    }
    const fs = require('fs');
    fs.writeFile('day10/out', out, console.log);
};
