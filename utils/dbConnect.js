import mongoose from 'mongoose';
export default async function dbConnect  (){
        try {
            await mongoose.connect('mongodb+srv://nasserbash16:123456Rr@cluster0.nybimxd.mongodb.net/depot',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              })
            .then(() => console.log('Connected!'));
        } catch (error){
            console.log(error);
        }
}