import { Component, OnInit } from '@angular/core';
// Import service
import { ArticleService } from '../service/article.service';
@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  articles:any=[];
//Inject service
  constructor(private articleService:ArticleService) { }
  ngOnInit() {
 this.articleService.getArticles()
.subscribe(
  res => {
    for(let key in res){
      this.articles.push(res[key]);
    }
  },
  err => {
    console.log("Error occured");
  }
);
 }
 }
