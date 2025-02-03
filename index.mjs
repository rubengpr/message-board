import express, { static as serveStatic, urlencoded } from 'express'; // Import express library
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

// Convert __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // Creates an instance of express() and saves it in app variable

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = join(__dirname, "public");
app.use(serveStatic(assetsPath));

app.use(urlencoded({ extended: true }));


const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const formattedDate = day + '/' + month


import indexRouter from './routes/indexRouter.mjs'
import newRouter from './routes/newRouter.mjs'

app.use('/', indexRouter);
app.use('/new', newRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening to requests on port ${PORT}`)
});