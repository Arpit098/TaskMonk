import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password: {
            type :String,
            required:true
        },
        tables: {
            type: Array,
            require:false
        }
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("User",userSchema)

export default User