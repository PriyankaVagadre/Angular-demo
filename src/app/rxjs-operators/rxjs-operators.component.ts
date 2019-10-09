import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RxjsOpratorService } from './service/rxjs-oprator.service';
import { Dogs } from './model/dog.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  public myobj : any ;
  public dogs : Dogs[];
  listofDog: string[];


  // array of number
  public listOfNo = [1, 2, 3, 4, 5, 6];

  constructor(public myservice : RxjsOpratorService ) { }

  ngOnInit() {
     this.myservice.getData().subscribe(data=> {
      this.myobj = data;
      console.log(this.myobj);
      this.listofDog = this.myobj.filter(item => item.dogs)
      console.log(this.listofDog);

     })

     //Combining Multiple Operators

    //  this.listOfNo.of().pipe(filter(num=> num%2==0).map(num => num*num))

  }

}
