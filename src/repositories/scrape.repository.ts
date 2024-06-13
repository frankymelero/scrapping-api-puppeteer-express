import puppeteer from 'puppeteer';

export const scrapeRepository = {
    scrape: async (url: string): Promise<string> => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const result = await page.evaluate(() => {
            return document.title;
        });
        await browser.close();
        return result;
    }
};