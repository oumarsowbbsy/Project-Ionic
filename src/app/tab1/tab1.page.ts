import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  program: any;
  public selectedId;
  constructor(public apiConnectService: ApiConnectService, private router: Router) {
    this.getProgramme();
  }
  getProgramme() {
    this.apiConnectService.getProgramme().then(data => {
      this.program = data;
      console.log(this.program);
    });
  }
  onSelect(program){
    this.router.navigate(['../programme-detail',program.id])
  }
  isSelected(program){
    return program === this.selectedId;
  }
}
