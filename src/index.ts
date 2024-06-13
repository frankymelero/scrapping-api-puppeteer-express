import express from 'express';
import router from './routes/scrape.route';

const app = express();
const port = 3000;

app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});