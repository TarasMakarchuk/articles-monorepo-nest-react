import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloResponse } from '../common/HelloResponse';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): HelloResponse {
    return this.appService.getHello();
  }
}
