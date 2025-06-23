const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true
    },
    completed:{
        type : Boolean,
        required : true
    }
},{timestamps : true});

module.exports = mongoose.model('Taskss',taskSchema);
