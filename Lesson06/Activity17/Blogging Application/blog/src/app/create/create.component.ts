import { Component, OnInit } from '@angular/core';
import { Posts } from '../post';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  loading = false;
  success = '';
  error = '';
  tags = ['POLITICS', 'ECONOMY', 'EDUCATION', 'STORY', 'TECH'];

  model: any = new Posts('', '', '', '');

  submitted = false;


  constructor(private auth: ArticleService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.auth.PostArticle(this.model)
      .pipe(first())
      .subscribe(
        data => {
<<<<<<< HEAD
          this.loading = false;
=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
          this.success = 'Article successfully Posted';
          setTimeout(this.navigateToBlogHome.bind(this), 2000);

        },
        error => {
<<<<<<< HEAD
          this.error = error.message;
=======
          this.error = error;
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
          this.loading = false;
        });
  }


  navigateToBlogHome() {
    this.router.navigate(['/blog']);
  }
}


