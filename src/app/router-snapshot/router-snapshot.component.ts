import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-snapshot',
  templateUrl: './router-snapshot.component.html',
  styleUrls: ['./router-snapshot.component.scss']
})
export class RouterSnapshotComponent implements OnInit, OnDestroy {
  urlsnapshot;

  constructor(public router : ActivatedRoute) { }

  ngOnInit() {
     this.urlsnapshot = this.router.snapshot.queryParams["name"];  // www.peieisisj.com&password="edjlejd"&name=dkkdls
    //  this.urlsnapshot = this.router.snapshot.queryParams["password"];
    //  this.urlsnapshot = this.router.snapshot.queryParams["faq"]
    this.urlsnapshot  = this.router.params.subscribe(params =>{
      console.log(params)
    })
  }
  ngOnDestroy(){
    this.urlsnapshot.unsubscribe();
  }

}
