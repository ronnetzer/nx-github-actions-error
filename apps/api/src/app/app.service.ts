import { Injectable } from '@nestjs/common';
import { Message } from '@nx-github-actionss-error/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
