import mongoose from "mongoose";
import config from "config"
import Logger from '../config/logger';

async function connection() {
    
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri)
        Logger.info("Conectou ao banco de dados");
    } catch (e) {
       Logger.error("Não foi possivel conectar");
       Logger.error(`Erro: ${e}`);
       process.exit(1);
    }
}

export default connection;