import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string, ...optional: unknown[]) {
    // Простая обёртка для консоли — можно заменить на более сложный логгер
    // или отправку логов на сервер.
    // eslint-disable-next-line no-console
    console.log(`[Logger] ${message}`, ...optional);
  }

  info(message: string, ...optional: unknown[]) {
    // eslint-disable-next-line no-console
    console.info(`[Logger] ${message}`, ...optional);
  }

  error(message: string, ...optional: unknown[]) {
    // eslint-disable-next-line no-console
    console.error(`[Logger] ${message}`, ...optional);
  }
}
