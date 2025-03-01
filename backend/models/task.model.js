const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({

    title:{type: String, required:true},
    description:String,
    status:{type:String, enum:["pending", "completed","in-progress"], default:"pending"},
    dueDate:{type:Date},
    user:{type: mongoose.Schema.Types.ObjectId, ref:"users", required:true},

},
    {
        timestamps : true
    }
)

const TaskModel = mongoose.model("tasks", TaskSchema);

module.exports = TaskModel