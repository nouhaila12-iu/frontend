import { Component, OnInit } from '@angular/core';
import {RestServiceService} from "../rest-service.service";
import {Router} from "@angular/router";
import * as amplitude from '@amplitude/analytics-browser'

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {

  search_input: String;

  constructor(private router: Router,public headerService : RestServiceService) { }

  ngOnInit(): void {
  }

  doSearch(input)
  {
    this.search_input = input;
    this.router.navigate(['courses/all-courses'],{queryParams : { 'search' : this.search_input }});
    amplitude.init("0a617f4497802157d7fe4d26583bd1aa");
    amplitude.track('Explore Clicked');
  }
}
