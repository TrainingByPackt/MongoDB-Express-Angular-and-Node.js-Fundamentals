import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app.view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})

export class ViewPostComponent implements OnInit {
  id: any;
  article: any;
<<<<<<< HEAD
  constructor( private route:ActivatedRoute,private articleService: ArticleService) { }
=======
  constructor( private route:Router,private articleService: ArticleService) { }
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getArticle(this.id)
        .subscribe(
          res => {
            console.log(res)
            this.article = res;
          },
          err => {
            console.log("Error occured");
          }
        );
    });
  }
}
