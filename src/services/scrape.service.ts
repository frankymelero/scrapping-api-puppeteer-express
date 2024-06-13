import { scrapeRepository } from "../repositories/scrape.repository";

export const scrapeService = {
    scrapeWebsite: async (url: string): Promise<string> => {
        return await scrapeRepository.scrape(url);
    }
};