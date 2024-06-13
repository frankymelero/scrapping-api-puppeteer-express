import { Router } from 'express';
import { scrapeController } from '../controllers/scrape.controller';

const router = Router();

router.get('/scrape', scrapeController.scrape);

export default router;
