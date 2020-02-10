import { Component } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  sponsor: any;
  link_spon = "http://localhost:8000/uploads/images/sponsor/";
  constructor(public apiConnectService: ApiConnectService) {
    this.getSponsor();
  }
  getSponsor() {
    this.apiConnectService.getSponsor().then(data => {
      this.sponsor = data;
      console.log(this.sponsor);
    });
  }
}
