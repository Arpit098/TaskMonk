import mongoose from "mongoose"

const connectToDataBase = async ()=>{
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://shivanshmitra53:2GtXUKSVTB9NrnhT@cluster0.q7cngrb.mongodb.net/?retryWrites=true&w=majority"
        )
        if(connection){
            console.log("connected to DataBase")
        }
    } catch (error) {
        console.log("error in connectToDatabase", error)
        throw error
    }
}

export default connectToDataBase