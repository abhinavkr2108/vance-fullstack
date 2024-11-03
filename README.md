
# Web Scraping Platform

A web app that retrieves and displays historical exchange rate data for the various currencies, sourced directly from Yahoo Finance. 

This app enables users to view past trends, analyze fluctuations, and gain insights into the currency exchange rates over specified time periods, with easy-to-navigate historical data visualizations.


## Tech Stack Used


- **Frontend**:  Next.js, TypeScript, Tailwind CSS
- **Backend**:  Node.js, Express.js, JavaScript, NeonDB PostgreSQL, Prisma ORM
- **UI Library**:  ShadCN UI
- **Charts:** Recharts and ShadCN
- **Cron Jobs:** node-cron


## Demo
 [See the demo Video](https://firebasestorage.googleapis.com/v0/b/docwrite-38576.appspot.com/o/vance_full_stack_project.mp4?alt=media&token=1dcc5fbc-9f23-4460-9e1d-4a761175b309)

## Screenshots

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/docwrite-38576.appspot.com/o/vance2.png?alt=media&token=896c5959-e53d-4ed8-a312-ca06fcb94c0a)

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/docwrite-38576.appspot.com/o/vance1.png?alt=media&token=7b2cf4b9-f030-41b2-bc53-d1a75a6e66ea)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`="postregres database url"


## Deployment

- Frontend of the application is deployed on Vercel whereas backend is deployed on heroku
- Frontend URL: https://vance-fullstack.vercel.app/
- Backend URL:  https://vance-backend-c46dd7690e6d.herokuapp.com/

### Errors faced in Hosting
- The app is working fine on localhost but somehow the API is returning empty response after being hosted on Heroku

```
DATA {data: Array(0)} (Empty response in console)
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/abhinavkr2108/vance-fullstack
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies (Backend)

```bash
  npm install
```
Install dependencies (Frontend)

```bash
  cd frontend
```

```bash
  pnpm install
```

Start the backend server

```bash
  npm run start
```
Start the frontend server
```bash
  cd frontend
```

```bash
  pnpm dev
```

