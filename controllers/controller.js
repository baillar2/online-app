var model = require('../model/model.js')


function createUser(req, res){

	var person = new model ({
		name: req.body.name,
		bio: req.body.bio, 
		skills: req.body.skills.split(','),
		years: +req.body.years, 
		why: req.body.why
	})

	person.save(function(err, savedUser){
		console.log('yey')	
	})
	res.send()
}

function getUser(req, res){
	model.find({}, function(err, doc){					
			console.log(doc)
			res.send(doc)	
	})
}



module.exports = {
	createUser: createUser,
	getUser: getUser
}