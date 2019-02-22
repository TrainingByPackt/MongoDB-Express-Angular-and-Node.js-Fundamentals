import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../posts'
import { Observable } from 'rxjs';

@Injectable()

export class ArticleService {
  article: any;
  token = 'JWT ' + localStorage.getItem('currentUser');
  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': this.token });

  articlesUrl= 'http://localhost:3000/articles';
  articleUrl= 'http://localhost:3000/article/';
  constructor(private http: HttpClient) { }

  getArticles(): Observable<Post> {
    this.article = this.http.get<Post>(`${this.articlesUrl}`);
    return this.article;
  }


  getArticle(id: number) {
    return this.http.get(`${this.articleUrl}` + id);
  }

  /** POST: add a new article to the database */
  PostArticle(article: Post): Observable<Post> {
  
    return this.http.post<Post>(`${this.articlesUrl}`,
      { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo }, {
        headers: this.httpOptions
      })
  }

  deleteArticle(id: number):
    Observable<{}> {
    return this.http.delete(`${this.articleUrl}` + id)
  }

  updateArticle(id: number, article: Post): Observable<Post> {
    // let token = 'JWT ' + localStorage.getItem('currentUser');
    // const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token });
    return this.http.put<Post>(`${this.articleUrl}` + id, { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo },{
      headers: this.httpOptions
    })
  }
}
