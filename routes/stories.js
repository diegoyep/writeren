const Story = require('../models/Story');

module.exports = function(app){
	app.get('/story', function(req, res, next){
		res.render('story', {title: "story"});
	});

	app.get('/stories', function(req, res, next){
		Story.find((err, stories) => {
			res.render('stories', {title:"stories", 
				stories: stories});
		});
	});

	app.get('/serials', function(req, res, next){
		res.render('serials', {title:"serials"});
	})

	app.get('/madman', function(req,res, next){
		res.render('madman', {title: "bits"});
	})

	app.get('/poetry', function(req, res, next){
		res.render('poetry', {title: "traveling"})
	})

	app.get('/about', function(req, res, next){
		res.render('about', {title:"about"});
	})

	app.get('/help', function(req, res, next){
		res.render('help', {title: "help"});
	})
}