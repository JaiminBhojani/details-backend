const mongoose = require('mongoose');
const DATA_URL = 'mongodb+srv://Jaimin12:123456jj@newcluster.hti0ea9.mongodb.net/submit'
// const DATA_URL = process.env.REACT_APP_DATABASE_URL;

const connectToMongo = () => {
        mongoose.connect(DATA_URL , {useNewUrlParser: true, useUnifiedTopology: true}).catch (error => console.log(error));
}
module.exports = connectToMongo;