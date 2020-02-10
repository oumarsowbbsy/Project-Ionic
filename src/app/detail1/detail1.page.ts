import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GetProgrammeService} from '../service/get-programme.service';

@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.page.html',
  styleUrls: ['./detail1.page.scss'],
})
export class Detail1Page implements OnInit {
  public idDetail: any;
  public programmeData = [];
  public programmeData1 = [];

  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public getProgrammeService: GetProgrammeService) { }

  ngOnInit() {
    this.idDetail = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProgrammeService.getData().subscribe((data) => {
      this.programmeData = Array.from(Object.keys(data), k => data[k]);
      console.log(this.programmeData1 = this.programmeData[3]);
    })

  }

}
