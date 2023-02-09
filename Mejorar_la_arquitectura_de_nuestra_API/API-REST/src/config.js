import 'dotenv/config'

export default {
  mongoDB: {
            URL: process.env.MONGO_URI,
            options: {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
        }
            
    }
    
};