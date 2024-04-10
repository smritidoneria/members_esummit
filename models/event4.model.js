const mongoose = require('mongoose');


const event4Schema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: Users,
        }
    }
)

const Event4 =  mongoose.model("Event4", event4Schema);
export default Event4;