import { Controller, Get, Render } from '@nestjs/common';

@Controller('/')
export class AppController {

    @Get(['', 'article'])
    @Render('layout')
    pages() {

    };
}
