import express from 'express';
import router from './routes/scrape.route';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
    origin: '*', 
    methods: ['GET'], 
    allowedHeaders: ['Content-Type'], 
};

app.use(cors(corsOptions));

app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});