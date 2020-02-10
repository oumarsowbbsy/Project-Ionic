import { Component } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  intervenant: any;
  link_int= 'http://localhost:8000/uploads/images/intervenant/';
  constructor(public apiConnectService: ApiConnectService) {
    this.getIntervenant();
    }

  getIntervenant() {
    this.apiConnectService.getIntervenant().then(data => {
      this.intervenant = data;
      console.log(this.intervenant);
    });
  }

}
