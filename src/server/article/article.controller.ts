import { Controller, Get } from '@nestjs/common';
import * as path from 'path';
import { ArticleService } from './article.service';


@Controller('api/article')
export class ArticleController {
    constructor(private readonly _articleService: ArticleService) {}

    @Get('/list')
    getAll() {
        return this._articleService.getAllArticles();
    };
}