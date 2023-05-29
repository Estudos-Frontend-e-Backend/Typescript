require("dotenv").config();

import express from 'express'
import config from 'config'

// DB
import db from '../config/db'

const app = express()

// json middleware
app.use(express.json());

// routes
import router from './router'

// Logger
import Logger from '../config/logger';

// Middleware
import morganMiddleware from './middleware/morganMiddleware';

app.use(morganMiddleware);

app.use("/api/", router);

const port = config.get<number>("port")

app.listen(port, async () => {
    await db();
    Logger.info(`Aplicação está funcionando na porta: ${port}`)
});