module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://diego:finalf@ds051883.mongolab.com:51883/writer',
};