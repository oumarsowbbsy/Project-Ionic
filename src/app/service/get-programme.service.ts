import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProgrammeService {


  private finaldata = [];
  private apiurl = 'http://127.0.0.1:8000/api/programmes';

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiurl);
  }

}
