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
	res.send('yay')
}

function getUser(req, res){
	model.find({}, function(err, doc){					
			console.log(doc)
			res.send(doc)	
	})
}

function removeUser(req, res){
	model.remove({_id:req.body.id}, function(err, doc){
		console.log(doc)
		res.send(model)
	})

}

module.exports = {
	createUser: createUser,
	getUser: getUser,
	removeUser: removeUser,
}