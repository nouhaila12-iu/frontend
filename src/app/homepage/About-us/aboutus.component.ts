import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Article } from 'src/app/model/Article';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutUsComponent implements OnInit {
  articles: Array<any>;

  constructor(private router : Router,private articleService : RestServiceService) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(res => {
      console.log("articles", res);
      this.articles = res.data;
    });

  }

  gotoForum()
  {
    this.router.navigate(['forum'],{ queryParams : { 'search' : 'all' }});
  }
}
