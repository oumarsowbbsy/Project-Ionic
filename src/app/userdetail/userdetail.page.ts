import { Component, OnInit } from '@angular/core';
import {ApiConnectService} from '../api-connect.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})
export class UserdetailPage implements OnInit {
  program: any;
  public iDetails: any;
  public idUrl: any;
  constructor(public apiConnectService: ApiConnectService, public activatedRoute: ActivatedRoute) {
    this.iDetails = this.activatedRoute.snapshot.paramMap.get('id');
    this.idUrl = "/api/intervenants/" + this.iDetails
    console.log(this.idUrl)
    this.getProgramme();
  }

  ngOnInit() {

  }
  getProgramme() {
    this.apiConnectService.getProgramme().then(data => {
      this.program = data;
      console.log(this.program);
    });
  }

}
