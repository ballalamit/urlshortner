const mongoose = require('mongoose');


const urlSchema = mongoose.Schema({
    title : {
        type: String,
       default:null
    },
    original_Url: {
        type: String,
        required: true,
    },
    shorted_Url:{
        type: String,
    },
    visit_Count:{
        type: Number,
        default: 0,
    },
    user_Id: {
        type: String,
    },
},{
    timestamps: true 
}
)

const urlModel = mongoose.model('url', urlSchema)


module.exports= urlModel