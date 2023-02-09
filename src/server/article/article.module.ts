import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ArticleService } from './article.service';
import { ArticleController } from "./article.controller";

@Module({
    providers: [ArticleService, ConfigService],
    controllers: [ArticleController],
})

export class ArticleModule {}