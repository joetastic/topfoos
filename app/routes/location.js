
/*
 * GET location listing.
 */


// Just going to return matchless for now
exports.index = function(req, res){
    res.render('location', {
        num_players: 12
    });
};

exports.select = function(req, res) {
    res.render('select', {
    });
};
