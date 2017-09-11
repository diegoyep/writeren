const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
	title: String,
	publicationDate: Date,
	link: String,
	category: String
})

const Story = mongoose.model('Story', storySchema);

module.exports = Story; 

