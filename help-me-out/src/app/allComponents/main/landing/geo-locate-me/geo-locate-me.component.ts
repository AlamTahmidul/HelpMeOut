import { Component, OnInit } from '@angular/core';
import { GeoLocateService } from '../../../../services/geoLocateService/geo-locate.service';

@Component({
  selector: 'app-geo-locate-me',
  templateUrl: './geo-locate-me.component.html',
  styleUrls: ['./geo-locate-me.component.css'],
})
export class GeoLocateMeComponent implements OnInit {
  userLoc: any;
  constructor(private geolocateService: GeoLocateService) {}

  ngOnInit(): void {}

  locateMe() {
    this.geolocateService.locateMe().subscribe((res) => {
      console.log(res);
      this.userLoc = res;
      console.log(this.userLoc.location);
    });
  }
}
