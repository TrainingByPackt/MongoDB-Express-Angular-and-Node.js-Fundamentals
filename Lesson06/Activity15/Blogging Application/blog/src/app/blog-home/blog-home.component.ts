import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  articles:any;
  loading = false;
  success = '';
  error = '';
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
 this.articleService.getArticles()
.subscribe(
  res => {
    console.log(res)
    this.articles=res;
  },
  err => {
    console.log("Error occured");
  }
);
 }

 deleteAdUnit(index,id) {
  this.articleService.deleteArticle(id).subscribe(data => {
        this.success = 'Article Deleted';
        // setTimeout(this.navigateToBlogHome.bind(this), 2000);
        this.articles.splice(index, 1);
      },
      error => {
        this.error = error;
        this.loading = false;
  });
}

}
