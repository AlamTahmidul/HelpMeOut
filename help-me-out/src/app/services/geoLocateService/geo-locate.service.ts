import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeoLocateService {
  geolocapi =
    'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD6E7tmI_VAA5uFebfUFth-VpQq_KsT0Io';
  constructor(private httpClient: HttpClient) {}

  locateMe() {
    let queryParams = new HttpParams();
    queryParams.set('key', 'AIzaSyD6E7tmI_VAA5uFebfUFth-VpQq_KsT0Io');
    return this.httpClient.post(this.geolocapi, {});
  }
}
