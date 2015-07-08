

module.exports = function(app){
	app.get('/story', function(req, res, next){
		res.render('story', {title: "story"});
	});
}