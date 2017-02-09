// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){

	var friends = data['friends'];

	res.render('index', {
		'friends' :  friends
	}
	);
};