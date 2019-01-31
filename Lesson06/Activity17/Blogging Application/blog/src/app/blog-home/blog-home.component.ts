import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
<<<<<<< HEAD
import { AuthService } from '../service//auth.service';

=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
<<<<<<< HEAD
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
=======
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
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
