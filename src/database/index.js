import mongoose from "mongoose";

import config from '../config/database'



class Database{
    constructor() {
        this.connection = mongoose.connect(config.url, {
            useNewUrlParser:true,
            useUnifildeTopology:true,
        
        });

        
    }
}


export default new Database();