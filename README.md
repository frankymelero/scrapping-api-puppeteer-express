# Scrapping Api Template

This template is an API with a 3-layer architecture using TypeScript and Express. The API uses Puppeteer to perform web scraping.

## Table of Contents

1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Usage](#usage)
4. [Endpoints](#endpoints)
4. [Contact](#contact)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/frankymelero/scrapping-api-puppeteer-express
   cd scrapping-api-puppeteer-express
   ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

## Project Structure
```css
scrapping-api-puppeteer-express/
├── src/
│   ├── controllers/
│   │   └── scrape.controller.ts
│   ├── services/
│   │   └── scrape.service.ts
│   ├── repositories/
│   │   └── scrape.repository.ts
│   ├── routes/
│   │   └── scrape.route.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```
## Usage
1. **Compile the project**:

    ```bash
    npm run build
    ```
2. **Start the server**:

    ```bash
    npm start
    ```    
## Endpoints

### GET /api/scrape

This endpoint scrapes the provided URL to get the title.

- **URL**: `/api/scrape`
- **Method**: `GET`
- **Query Parameters**:
  - `url` (required): The URL of the website to scrape.

- **Response**:
  - `200 OK`: Returns the scraping result.
  - `400 Bad Request`: If the URL parameter is missing.
  - `500 Internal Server Error`: If an error occurs during scraping.

**Example Request**:
```http
GET /api/scrape?url=https://example.com
```

**Example result**
```http 
{
  "result": "Example Domain"
}
```
## Contact

For any questions, feedback, or issues, please feel free to reach out:

- **Linkedin:** [Linkedin](https://linkedin.com/in/frankymelero)
- **GitHub Issues**: [Project Issues](https://github.com/frankymelero/scrapping-api-puppeteer-express/issues)

