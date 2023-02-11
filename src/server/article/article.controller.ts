import { Controller, Get, Header, Param, Res } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Response } from 'Express';

@Controller('api/article')
export class ArticleController {
    constructor(private readonly _articleService: ArticleService) {}

    @Get('/list')
    getAll() {
        return this._articleService.getAllArticles();
    };

    @Get('/:name')
    @Header('Content-Type', 'application/text')
    getArticle(@Res() res: Response, @Param('name') name: string) {
        const fileStream = this._articleService.getArticle(name);
        fileStream.pipe(res)
    };
}
