import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router, ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentID;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id;
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
      {
        let id = parseInt(params.get('id'));
        this.departmentID = id;
      }
    )
  }
  
  goBack(){
    let privId = this.departmentID -1;
    this.router.navigate(['/department-list', privId])
    if (privId <= 0){
      this.router.navigate(['/department-list',])
    }
  }

  goNext(){
   let nextId = this.departmentID +1;
   this.router.navigate(['/department-list', nextId]);
  }
}
