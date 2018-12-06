module.exports = function (coords) {
    var regex = /(\d+), (\d+)/;
    var maxX = -Infinity;
    var maxY = -Infinity;
    var minX = Infinity;
    var minY = Infinity;

    for(i=0;i<coords.length;i++) {
        let matches = regex.exec(coords[i]);
        coords[i] = {x: parseInt(matches[1]), y: parseInt(matches[2]), owned: [], infinite: false};
        maxX = coords[i].x > maxX ? coords[i].x : maxX;
        maxY = coords[i].y > maxY ? coords[i].y : maxY;
        minX = coords[i].x < minX ? coords[i].x : minX;
        minY = coords[i].y < minY ? coords[i].y : minY;
    }

    for (x=minX;x<=maxX;x++) {
        for(y=minY;y<=minY;y++) {
            console.log(x, y);
            let closestDist = Infinity;
            let closest = null;
            for (i=0;i<coords.length;i++) {
                let dist = Math.abs(coords[i].x - x) + Math.abs(coords[i].y - y);
                //console.log(i, dist);
                if (dist === closestDist) {
                    closest = 'shared';
                } else if (dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            }
            if (closest === 'shared') {
                console.log('breaking');
                break;
            }
            //console.log(closest);
            coords[closest].owned.push({x:x, y:y});
            coords[closest].infinite = coords[closest].infinite || x === minX || x === maxX || y === minY || y === maxY;
        }
    }
    var lrgArea = -Infinity;
    for(i=0;i<coords.length;i++) {
        if (!coords[i].infinite) {
            let area = coords[i].owned.length;
            lrgArea = area > lrgArea ? area : lrgArea;
        }
    }
    return lrgArea;
};
