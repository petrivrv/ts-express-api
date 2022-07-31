import express, {Express} from 'express'
import {router as userRouter} from './users/users';
import {Server} from 'http'

class App {
    app:Express
    port:string
    server:Server

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'
    }
    useRoutes(){
        this.app.use('/users',userRouter)
    }
    public async init(){
        this.useRoutes()
        this.server=this.app.listen(this.port)
        console.log('Started...');

    }
}
 
export default App ;