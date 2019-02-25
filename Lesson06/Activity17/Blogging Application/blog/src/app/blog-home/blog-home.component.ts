import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { AuthService } from '../service//auth.service';


@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  articles: any;
  loading = false;
  success = '';
  error = '';
  isLoggedIn: boolean;
  constructor(private articleService: ArticleService, private authService: AuthService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(
        res => {
          console.log(res)
          this.articles = res;
        },
        err => {
          console.log("Error occured");
        }
      );
    this.authService.cast.subscribe(user => this.isLoggedIn = user);
  }

  deleteAdUnit(index, id) {
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

  logOut() {
    this.authService.logoutUser()
  }

}