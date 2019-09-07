import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';


@Injectable()
export class CommonServiceProvider {

  constructor(public httpClient: HttpClient, public http: Http) {
    console.log('Hello CommonServiceProvider Provider');
  }

  fetchRespFromLocalJson(fileLoc) {
    console.log('start fetchRespFromLocalJson service');
      return new Promise(resolve => {
          this.http.get(fileLoc).subscribe(response => {
              var data = response.json();
              resolve(data.contents);
          });
      });
  }


}