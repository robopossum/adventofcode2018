module.exports = function(claims) {
    var xCoord = [];
    var yCoord = [];
    var regex = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;

    for(i=0;i<claims.length;i++) {
        var claim = regex.exec(claims[i]);
        for (x=claim[2];x<parseInt(claim[2]) + parseInt(claim[4]);x++) {
            xCoord[x] = xCoord[x] || [];
            xCoord[x].push(claim[1]);
        }
        for (y=claim[3];y<parseInt(claim[3]) + parseInt(claim[5]);y++) {
            yCoord[y] = yCoord[y] || {};
            yCoord[y][claim[1]] = claim[1];
        }
    }
    let height = Object.keys(yCoord).length;
    var overlaps = 0;
    for (x=0;x<xCoord.length;x++) {
        for (y=0;y<height;y++) {
            if (xCoord[x] && yCoord[y]) {
                if (xCoord[x].filter(n => yCoord[y][n] !== undefined).length > 1) {
                    overlaps += 1;
                }
            }
        }
    }
    return overlaps;
};
