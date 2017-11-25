const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var templateSchema = new Schema({
    templateName: {
        type:String,
        required:true,
        unique :true
    },
    createdDate :{
        type:Date,
        default: Date.now
    },
    lastModified : {
        type:Date
    },
    filesUploaded :{
        type:Array
    }
});

module.exports = mongoose.model('Template',templateSchema)