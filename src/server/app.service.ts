import { Injectable } from '@nestjs/common';
import { ArticleListResponse } from '../common/ArticleListResponse';

@Injectable()
export class AppService {
  getHello(): ArticleListResponse {
    return { text: 'Hello World from Nest!' };
  };
}
