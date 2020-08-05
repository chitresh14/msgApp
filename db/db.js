const mongoose = require('mongoose');

console.log("process.env.MONGODB_URI:::::::0",process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: true,
    useUnifiedTopology: true
});
