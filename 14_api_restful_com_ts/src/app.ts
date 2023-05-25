import express from 'express'
import config from 'config'

const app = express()

// json middleware
app.use(express.json());


// routes
import router from './router'

app.use("/api/", router);

const port = config.get<number>("port")


app.listen(3000, async () => {
    console.log(`Aplicação está funcionando na porta: ${port}`)
});