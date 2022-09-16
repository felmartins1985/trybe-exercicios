interface Logger{
  log(param:string): void;
}

interface Database{
  logger: Logger;
  save(key:string, value:string): void;
}

class ConsoleLogger implements Logger{
  log(param: string): void {
    console.log(param);
  }
}
class ConsoleLogger2 implements Logger{
  log(param: string): void {
    console.log('Log2:', param);
  }
}

class ExampleDatabase implements Database{
  logger: Logger;
  constructor(logger: Logger= new ConsoleLogger()) {
    this.logger= logger;
    // this.logger= new ConsoleLogger();
  }
  save(key:string, value:string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();// como funciona sem parametro?

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');