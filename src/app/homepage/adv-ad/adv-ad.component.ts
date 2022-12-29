import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RestServiceService } from 'src/app/rest-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'adv-ad',
  templateUrl: './adv-ad.component.html',
  styleUrls: ['./adv-ad.component.css']
})
export class AdvAdComponent implements OnInit {
  ads: Array<any>;
  api_url: string = environment.apiUrl

  constructor(private router : Router,private adsService :RestServiceService) { }

  ngOnInit(): void {
    this.adsService.getAllAds().subscribe(res => {
      console.log("ads", res);
      this.ads = res.data;
      console.log("test  ", res.data[0].attributes.image.data.attributes.url);

      //about.data.attributes.photo2.data[0].attributes.formats.thumbnail.url
    });
  }

  gotoForum()
  {
    this.router.navigate(['forum'],{ queryParams : { 'search' : 'all' }});
  }
}
