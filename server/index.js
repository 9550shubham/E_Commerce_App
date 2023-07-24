// IMPORTS FROM PACKAGES
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // for flutter web

// IMPORTS FROM OTHER FILES
import authRouter from './routes/auth.js'
import adminRouter from './routes/admin.js'
import productRouter from './routes/product.js';
import userRouter from './routes/user.js';

// INIT
const app = express();
const port = 3000;
const DB = 'mongodb+srv://<username>:<your password>@cluster0.ulzzerz.mongodb.net/?retryWrites=true&w=majority'

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
app.use(cors());  // for flutter web

// Connections
mongoose.connect(DB).then(() => {
    console.log('success')
}).catch((e) => {
        console.log(e);
    });

app.listen(port,"0.0.0.0", () => {
    console.log(`connected ${port}`)
})