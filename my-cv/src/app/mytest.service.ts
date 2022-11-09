import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// const jsonfile = require('jsonfile')
// const file = './data.json'

@Injectable({
  providedIn: 'root'
})
export class MytestService {

  constructor(private httpClient: HttpClient) { }
  private data: any;
  getdata(): Observable<{[key: string]: string}> {
    this.data = this.httpClient.get<{[key: string]: string}>('./assets/data/home.json');
    return this.data;
  }

}
