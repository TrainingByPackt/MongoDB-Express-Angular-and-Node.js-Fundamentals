import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../posts'
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======
import { environment } from '../../environments/environment'
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

@Injectable()

export class ArticleService {
<<<<<<< HEAD
=======
  config = environment;
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
  article: any;
  token = 'JWT ' + localStorage.getItem('currentUser');
  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': this.token });

<<<<<<< HEAD
  articlesUrl= 'http://localhost:3000/articles';
  articleUrl= 'http://localhost:3000/article/';
  constructor(private http: HttpClient) { }

  getArticles(): Observable<Post> {
    this.article = this.http.get<Post>(`${this.articlesUrl}`);
=======
  constructor(private http: HttpClient) { }

  getArticles(): Observable<Post> {
    this.article = this.http.get<Post>(`${this.config.articlesUrl}`);
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
    return this.article;
  }


  getArticle(id: number) {
<<<<<<< HEAD
    return this.http.get(`${this.articleUrl}` + id);
=======
    return this.http.get(`${this.config.articleUrl}` + id);
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
  }

  /** POST: add a new article to the database */
  PostArticle(article: Post): Observable<Post> {
  
<<<<<<< HEAD
    return this.http.post<Post>(`${this.articlesUrl}`,
=======
    return this.http.post<Post>(`${this.config.articlesUrl}`,
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
      { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo }, {
        headers: this.httpOptions
      })
  }

  deleteArticle(id: number):
    Observable<{}> {
<<<<<<< HEAD
    return this.http.delete(`${this.articleUrl}` + id)
=======
    return this.http.delete(`${this.config.articleUrl}` + id)
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
  }

  updateArticle(id: number, article: Post): Observable<Post> {
    // let token = 'JWT ' + localStorage.getItem('currentUser');
    // const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token });
<<<<<<< HEAD
    return this.http.put<Post>(`${this.articleUrl}` + id, { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo },{
=======
    return this.http.put<Post>(`${this.config.articleUrl}` + id, { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo },{
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
      headers: this.httpOptions
    })
  }
}
