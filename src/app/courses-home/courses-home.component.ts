import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {delay} from "rxjs/operators";
import {RestServiceService} from "../rest-service.service";
import {User} from "../model/User";
import * as amplitude from '@amplitude/analytics-browser';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.css'],
  providers: [NgbRatingConfig]
})

export class CoursesHomeComponent implements OnInit {

  coursesList : Course[] = [];
  search : string;
  dataList : Course[] = [];
  page = 1;
  pageSize = 9;

  constructor(config: NgbRatingConfig, private activatedRoute : ActivatedRoute,private courseService : RestServiceService, private router : Router) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.setSearch(params['search']);
        this.courseService.getAllCourses().pipe(delay(0)).subscribe((data: Course[]) => {
          this.dataList = data;
          if(this.getSearch()=='all')
          {
            this.coursesList = this.dataList;
          }
          else {
            this.coursesList = [];
            for(let x of this.dataList)
            {
              if(x.tags.includes(this.getSearch()) || x.coursename.includes(this.getSearch()))
              {
                console.log(x.tags + this.getSearch());
                this.coursesList.push(x);
              }
            }
          }
        });
      });
  }

  public setSearch(value : string)
  {
    this.search = value;
  }

  public getSearch() : string {
    return this.search;
  }

  public showAll()
  {
    this.router.navigate(['courses/all-courses'], {queryParams: {'search': 'all'}});
    amplitude.init("0a617f4497802157d7fe4d26583bd1aa");
    amplitude.track('Explore Clicked');
  }

  public gotoCourse(course_id : number)
  {
    let isValidUser : boolean = Boolean(sessionStorage.getItem('current_user'));
    if(isValidUser) {
        this.router.navigate(['course',course_id]);
    }
    else {
        this.router.navigate(['user','login']);
    }
  }

  public scroll()
  {
    window.scrollTo(0,0);
  }
}
