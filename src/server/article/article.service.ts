import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import {  ArticleListResponse} from './article.types';

const promisifiedReadDir = promisify(fs.readdir);

@Injectable()
export class ArticleService {
    constructor(private readonly _configService: ConfigService) {}

    getAllArticles(): Promise<ArticleListResponse> {
        return promisifiedReadDir(path.join(this._configService.get('dataPath'), 'articles'));
    };
}