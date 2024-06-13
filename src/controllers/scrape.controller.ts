import { Request, Response } from 'express';
import { scrapeService } from '../services/scrape.service';

// Type guard to check if the error is an instance of Error.
const isError = (error: unknown): error is Error => {
    return error instanceof Error;
};

export const scrapeController = {
    scrape: async (req: Request, res: Response) => {
        try {
            const url = req.query.url as string;
            if (!url) {
                return res.status(400).json({ error: 'URL is required' });
            }
            const result = await scrapeService.scrapeWebsite(url);
            res.json({ result });
        } catch (error: unknown) {
            if (isError(error)) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    }
};