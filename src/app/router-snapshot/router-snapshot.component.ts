import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-snapshot',
  templateUrl: './router-snapshot.component.html',
  styleUrls: ['./router-snapshot.component.scss']
})
export class RouterSnapshotComponent implements OnInit {
  urlsnapshot;

  constructor(public router : ActivatedRoute) { }

  ngOnInit() {
     this.urlsnapshot = this.router.snapshot.queryParams["name"];
  }

}
