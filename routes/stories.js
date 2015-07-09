

module.exports = function(app){
	app.get('/story', function(req, res, next){
		res.render('story', {title: "story"});
	});

	app.get('/stories', function(req, res, next){
		res.render('stories', {title:"stories"})
	})
}