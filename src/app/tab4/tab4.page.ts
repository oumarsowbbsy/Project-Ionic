import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  propos: any;
  link_props="http://localhost:8000/uploads/images/postere/";
  constructor(public apiConnectService: ApiConnectService) {
    this.getPropos();
   }

  ngOnInit() {
  }

  getPropos() {
    this.apiConnectService.getPropos().then(data => {
      this.propos = data;
      console.log(this.propos);
    });
  }

}
