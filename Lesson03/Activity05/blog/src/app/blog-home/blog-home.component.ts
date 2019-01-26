import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  articles:any=[];
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
 this.articleService.getArticles()
.subscribe(
  res => {
    console.log(res)
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
