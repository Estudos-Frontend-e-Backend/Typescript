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

app.use("/api/", router);

const port = config.get<number>("port")


app.listen(3000, async () => {
    await db();
    Logger.info(`Aplicação está funcionando na porta: ${port}`)
});