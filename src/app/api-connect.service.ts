import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  Sponsor = 'http://localhost:8000/api/sponsors.json';
  Intervenant = 'http://localhost:8000/api/intervenants.json';
  Programme = 'http://localhost:8000/api/programmes.json';
  Propos = 'http://localhost:8000/api/apropos.json';
  constructor(public http: HttpClient) {
      console.log('Ici la connexion à l\'api tous passe nickel');
   }
  getSponsor() {
    return new Promise(resolve => {
      this.http.get(this.Sponsor).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getProgramme() {
    return new Promise(resolve => {
      this.http.get(this.Programme).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getPropos() {
    return new Promise(resolve => {
      this.http.get(this.Propos).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getIntervenant() {
    return new Promise(resolve => {
      this.http.get(this.Intervenant).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
