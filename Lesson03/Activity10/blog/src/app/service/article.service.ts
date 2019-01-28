import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Post {
  photoUrl: string;
  title: string;
  body: string;
  tag: string;
  id: number;
  createdOn: Date;
}

@Injectable()

export class ArticleService {
  articlesUrl = 'http://localhost:3000/articles';
  articleUrl = 'http://localhost:3000/article/';
  article: any;

  constructor(private http: HttpClient) { }

  //   getArticles() {
  //     if (this.article ) {
  //       console.log(this.article);
  //       return of(this.article);
  //     } else {
  //       this.article = this.http.get(this.articlesUrl);
  //     return this.article;
  //   }
  // }


  getArticles():Observable<Post> {
    this.article = this.http.get<Post>(this.articlesUrl);
    return this.article;
  }


  getArticle(id: number) {
    return this.http.get(this.articleUrl + id);
  }

  // getAllContacts(): Observable<Post[]> {
  //   return this.http.get<Post[]>(this.articlesUrl);
  // }

  PostArticle(article: Post):Observable<Post> {
    return this.http.post<Post>(this.articlesUrl, article);
  }

  deleteArticle(id: number):
    Observable<{}> {
    return this.http.delete(this.articleUrl + id)
  }

  updateArticle(id: number, article: Post): Observable<Post> {
    return this.http.put<Post>(this.articleUrl + id, article)
  }
}
