module.exports = function(claims) {
    var xCoord = [];
    var yCoord = [];
    var regex = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;
    var ids = [];

    for(i=0;i<claims.length;i++) {
        var claim = regex.exec(claims[i]);
        ids[claim[1]] = claim[1];

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
    for (x=0;x<xCoord.length;x++) {
        for (y=0;y<height;y++) {
            if (xCoord[x] && yCoord[y]) {
                var overlapping = xCoord[x].filter(n => yCoord[y][n] !== undefined);
                if (overlapping.length > 1) {
                    for (i=0;i<overlapping.length;i++) {
                        if (ids[overlapping[i]]) {
                            delete ids[overlapping[i]];
                        }
                    }
                }
            }
        }
    }
    return Object.keys(ids);
};
