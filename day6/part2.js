module.exports = function (coords) {
    var regex = /(\d+), (\d+)/;
    var maxX = -Infinity;
    var maxY = -Infinity;
    var minX = Infinity;
    var minY = Infinity;

    for(i=0;i<coords.length;i++) {
        let matches = regex.exec(coords[i]);
        coords[i] = {x: parseInt(matches[1]), y: parseInt(matches[2])};
        maxX = coords[i].x > maxX ? coords[i].x : maxX;
        maxY = coords[i].y > maxY ? coords[i].y : maxY;
        minX = coords[i].x < minX ? coords[i].x : minX;
        minY = coords[i].y < minY ? coords[i].y : minY;
    }

    var validPoints = 0;

    for (x=minX;x<=maxX;x++) {
        for(y=minY;y<=maxY;y++) {
            let dist = 0;
            for (i=0;i<coords.length;i++) {
                dist += Math.abs(coords[i].x - x) + Math.abs(coords[i].y - y);
            }
            if (dist < 10000) {
                validPoints++;
            }
        }
    }
    return validPoints;
};
