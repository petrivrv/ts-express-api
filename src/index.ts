import App from './app';
import LoggerService from './logger/logger.service';

async function start () {
  const app = new App(new LoggerService()) //add LoggerService в конструктор это есть простое внедрение зависимостей
  await app.init()
  
}

start()