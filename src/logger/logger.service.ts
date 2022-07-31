import {Logger} from 'tslog'

class LoggerService {
    public logger:Logger

    constructor(){
        this.logger = new Logger({
            displayInstanceName:false,
            displayLoggerName:false,
            displayFunctionName:false,
            displayFilePath:'hidden'
        })
    }
    log(...args:unknown[]){
        this.logger.info(...args)
    }
    error(...args:unknown[]){
        this.logger.error(...args)
    }
    warn(...args:unknown[]){
        this.logger.warn(...args)
    }

}

export default LoggerService