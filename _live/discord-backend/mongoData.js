const mongoose = require("mongoose")

const discordSchema= mongoose.Schema({
channelName:String,
conversation:[{
   message:String,
   timeStamp:String,
    user:{
        displayName:String,
        email:String,
        photo:String,
        uid:String
    }



}]

})
export default mongoose.model('conversations',discordSchema)