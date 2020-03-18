import { Injectable, Autowired } from '@ali/common-di';
import {
  ILoggerManagerClient,
  SupportLogNamespace,
  ILogServiceClient,
  LogLevel,
} from '@ali/ide-core-common';

export { ILogger } from '@ali/ide-core-common';

@Injectable()
export class Logger implements ILogServiceClient {

  @Autowired(ILoggerManagerClient)
  private LoggerManager: ILoggerManagerClient;
  private logger: ILogServiceClient = this.LoggerManager.getLogger(SupportLogNamespace.Browser);

  public getLevel() {
    return this.getLevel();
  }

  public setLevel(level: LogLevel) {
    return this.logger.setLevel(level);
  }

  public error(...args) {
    return this.logger.error(...args);
  }

  public warn(...args) {
    return this.logger.warn(...args);
  }

  public log(...args) {
    return this.logger.log(...args);
  }
  public debug(...args) {
    return this.logger.debug(...args);
  }

  public verbose(...args) {
    return this.logger.verbose(...args);
  }

  public critical(...args) {
    return this.logger.critical(...args);
  }

  public dispose() {
    return this.logger.dispose();
  }
}
