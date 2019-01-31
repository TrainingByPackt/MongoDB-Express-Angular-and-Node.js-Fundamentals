import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../posts'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable()

export class ArticleService {
  config = environment;
  article: any;
<<<<<<< HEAD
  token = JSON.parse( localStorage.getItem('currentUser') ) ;
  httpOptions:any;

  constructor(private http: HttpClient) { 
    this.httpOptions = new HttpHeaders({  
      'Authorization': this.token,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'PUT, POST, GET, DELETE, OPTIONS',
     });
  }
=======
  token = 'JWT ' + localStorage.getItem('currentUser');
  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': this.token });

  constructor(private http: HttpClient) { }
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

  getArticles(): Observable<Post> {
    this.article = this.http.get<Post>(`${this.config.articlesUrl}`);
    return this.article;
  }


  getArticle(id: number) {
    return this.http.get(`${this.config.articleUrl}` + id);
  }

  /** POST: add a new article to the database */
  PostArticle(article: Post): Observable<Post> {
<<<<<<< HEAD
=======
  
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
    return this.http.post<Post>(`${this.config.articlesUrl}`,
      { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo }, {
        headers: this.httpOptions
      })
  }

  deleteArticle(id: number):
    Observable<{}> {
<<<<<<< HEAD
    return this.http.delete(`${this.config.articleUrl}` + id, {
      headers: this.httpOptions
    })
  }

  updateArticle(id: number, article: Post): Observable<Post> {
    console.log(this.token)
=======
    return this.http.delete(`${this.config.articleUrl}` + id)
  }

  updateArticle(id: number, article: Post): Observable<Post> {
    // let token = 'JWT ' + localStorage.getItem('currentUser');
    // const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token });
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
    return this.http.put<Post>(`${this.config.articleUrl}` + id, { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo },{
      headers: this.httpOptions
    })
  }
}
