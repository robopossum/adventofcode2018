module.exports = function (coords) {
    var regex = /(\d+), (\d+)/;
    var maxX = -Infinity;
    var maxY = -Infinity;
    var minX = Infinity;
    var minY = Infinity;

    for(i=0;i<coords.length;i++) {
        let matches = regex.exec(coords[i]);
        coords[i] = {x: parseInt(matches[1]), y: parseInt(matches[2]), owned: 0, infinite: false};
        maxX = coords[i].x > maxX ? coords[i].x : maxX;
        maxY = coords[i].y > maxY ? coords[i].y : maxY;
        minX = coords[i].x < minX ? coords[i].x : minX;
        minY = coords[i].y < minY ? coords[i].y : minY;
    }

    for (x=minX;x<=maxX;x++) {
        for(y=minY;y<=maxY;y++) {
            let closestDist = Infinity;
            let closest = null;
            for (i=0;i<coords.length;i++) {
                let dist = Math.abs(coords[i].x - x) + Math.abs(coords[i].y - y);
                if (dist === closestDist) {
                    closest = 'shared';
                } else if (dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            }
            if (closest !== 'shared') {
                coords[closest].owned++;
                coords[closest].infinite = coords[closest].infinite || x === minX || x === maxX || y === minY || y === maxY;
            }
        }
    }
    var lrgArea = -Infinity;
    for(i=0;i<coords.length;i++) {
        if (!coords[i].infinite) {
            lrgArea = coords[i].owned > lrgArea ? coords[i].owned : lrgArea;
        }
    }
    return lrgArea;
};
