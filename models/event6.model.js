const mongoose = require('mongoose');


const event4Schema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: Users,
        }
    }
)

const Event5 =  mongoose.model("Event5", event5Schema);
export default Event5;