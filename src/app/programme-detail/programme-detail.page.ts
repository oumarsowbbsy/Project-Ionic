import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiConnectService } from '../api-connect.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-programme-detail',
  templateUrl: './programme-detail.page.html',
  styleUrls: ['./programme-detail.page.scss'],
})
export class ProgrammeDetailPage implements OnInit {
  public programId: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  program;
  ngOnInit() {
    this.http.get("http://localhost:8000/api/programmes.json")
    .subscribe((data) => this.displaydata(data));
    
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.programId=id;
    });
  }
  gotoProg(){
    let selectedId = this.programId ? this.programId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo : this.route});
  }
  displaydata(data) {
    this.program = Array.of(data[this.programId - 1])
  }

}
