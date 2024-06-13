import { Request, Response } from 'express';
import { scrapeService } from '../services/scrape.service';

export const scrapeController = {
    scrape: async (req: Request, res: Response) => {
        try {
            const url = req.query.url as string;
            if (!url) {
                return res.status(400).json({ error: 'URL is required' });
            }
            const result = await scrapeService.scrapeWebsite(url);
            res.json({ result });
        } catch (error: unknown | any) {
            res.status(500).json({ error: error.message });
        }
    }
};