import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { Posts } from '../post';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  loading = false;
  success = '';
  error = '';
  tags = ['POLITICS', 'ECONOMY', 'EDUCATION', 'STORY', 'TECH'];

  model: any = new Posts('', '', '', '');

  submitted = false;
  id: any;
  article: any= {};
  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.articleService.getArticle(params.id)
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

  onSubmit() {
// console.log(this.article);
    this.submitted = true;
    this.loading = true;
    this.articleService.updateArticle(this.id, this.article)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.success = 'Article successfully Updated';
          setTimeout(this.navigateToBlogHome.bind(this), 2000);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }


  navigateToBlogHome() {
    this.router.navigate(['/blog']);
  }
}