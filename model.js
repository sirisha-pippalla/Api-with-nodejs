const mongoose = require('mongoose');

const empSchema = mongoose.Schema(
    {
        "name": {
            type: String,
            required: [true, "name is mandatary"],
        },

        "age": {
            type: Number,
            required: true,
        },

        "location":{
            type:String,
            required:false,
        },
        "image":{
            type:String,
            required:false,
        },
        // {
        //     timeStamps
        // }

    }
)

const empModel = mongoose.model('empmodel', empSchema);
module.exports = empModel;

