

module.exports = function(app){
	app.get('/story', function(req, res, next){
		res.render('story', {title: "story"});
	});

	app.get('/stories', function(req, res, next){
		res.render('stories', {title:"stories"})
	})

	app.get('/serials', function(req, res, next){
		res.render('serials', {title:"serials"});
	})

	app.get('/bits', function(req,res, next){
		res.render('bits', {title: "bits"});
	})

	app.get('/traveling', function(req, res, next){
		res.render('serials', {title: "traveling"})
	})
}