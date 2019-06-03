import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-ng-grid',
  templateUrl: './ng-grid.component.html',
  styleUrls: ['./ng-grid.component.scss']
})
export class NgGridComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
    title = 'app';

  //   columnDefs = [
  //     {headerName: 'Make', field: 'make', sortable: true, filter: true},
  //     {headerName: 'Model', field: 'model', sortable: true, filter: true},
  //     {headerName: 'Price', field: 'price', sortable: true, filter: true}
  // ];
  columnDefs = [
    {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'model', field: 'model', sortable: true, filter: true },
    {headerName: 'price', field: 'price', sortable: true, filter: true }
];


  //  rowData = [
  //       { make: 'Toyota', model: 'Celica', price: 35000 },
  //       { make: 'Ford', model: 'Mondeo', price: 32000 },
  //       { make: 'Porsche', model: 'Boxter', price: 72000 }
  //   ];

  // constructor() { } 
  rowData: any;
    constructor(private http: HttpClient) {

  }
  
  ngOnInit() {
    // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
