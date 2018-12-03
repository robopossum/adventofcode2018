module.exports = function(claims) {
    var xCoord = [];
    var yCoord = [];
    var regex = /#([0-9]+) @ ([0-9]+),([0-9]+): ([0-9]+)x([0-9]+)/;

    for(i=0;i<claims.length;i++) {
        var claim = regex.exec(claims[i]);
        for (x=claim[2];x<parseInt(claim[2]) + parseInt(claim[4]);x++) {
            xCoord[x] = xCoord[x] || [];
            xCoord[x].push(claim[1]);
        }
        for (y=claim[3];y<parseInt(claim[3]) + parseInt(claim[5]);y++) {
            yCoord[y] = yCoord[y] || [];
            yCoord[y].push(claim[1]);
        }
    }
    var overlaps = 0;
    for (x=0;x<xCoord.length;x++) {
        for (y=0;y<yCoord.length;y++) {
            if (xCoord[x] && yCoord[y]) {
                if (xCoord[x].filter((n) => {return yCoord[y].indexOf(n) > -1;}).length > 1) {
                    overlaps += 1;
                }
            }
        }
    }
    return overlaps;
};
