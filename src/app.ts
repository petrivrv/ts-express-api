import express, {Express} from 'express'
import {router as userRouter} from './users/users';
import {Server} from 'http'
import LoggerService from './logger/logger.service';

class App {
    app:Express
    port:string
    server:Server
    logger:LoggerService

    constructor(logger:LoggerService) {
        this.app = express()
        this.port = process.env.PORT || '3000'
        this.logger = logger
    }
    useRoutes(){
        this.app.use('/users',userRouter)
    }
    public async init(){
        this.useRoutes()
        this.server=this.app.listen(this.port)
        this.logger.log(`Started... PORT = ${this.port}`);

    }
}
 
export default App ;