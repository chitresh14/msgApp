const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_GOLD_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: true,
    useUnifiedTopology: true
});
