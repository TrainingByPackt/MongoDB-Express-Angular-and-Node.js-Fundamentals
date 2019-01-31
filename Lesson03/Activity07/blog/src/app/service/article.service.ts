import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../posts'
import { Observable } from 'rxjs';


@Injectable()

export class ArticleService {
  articlesUrl = 'http://localhost:3000/articles';
  articleUrl = 'http://localhost:3000/article/';
  article: any;
  httpOptions:any;

  constructor(private http: HttpClient) { 
    this.httpOptions = new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'PUT, POST, GET, DELETE, OPTIONS',
     });
  }

  getArticles(): Observable<Post> {
    this.article = this.http.get<Post>(this.articlesUrl);
    return this.article;
  }


  getArticle(id: number) {
    return this.http.get(this.articleUrl + id);
  }

  /** POST: add a new article to the database */
  PostArticle(article: Post): Observable<Post> {
  
    return this.http.post<Post>(this.articlesUrl,
      { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo }, {
        headers: this.httpOptions
      })
  }

  deleteArticle(id: number):
    Observable<{}> {
    return this.http.delete(this.articleUrl + id, {
      headers: this.httpOptions
    })
  }

  updateArticle(id: number, article: Post): Observable<Post> {
    return this.http.put<Post>(this.articleUrl + id, { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo },{
      headers: this.httpOptions
    })
  }
}
