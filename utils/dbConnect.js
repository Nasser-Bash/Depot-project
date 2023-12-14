import mongoose from 'mongoose';
export default async function dbConnect  (){
        try {
            await mongoose.connect(process.env.MONGODB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                connectTimeoutMS: 30000,
              })
            .then(() => console.log('Connected!'));
        } catch (error){
            console.log(error);
        }
}