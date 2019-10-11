import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import 'rxjs'

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss']
})
export class TestcomponentComponent implements OnInit {
  @ViewChild('form') signinForm : NgForm;
  defaultname ='pri';
  genders = ['male','female']

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(form.value);
   console.log(this.signinForm);

  }
  setValue(){
    this.signinForm.form.setValue(
     { userdata :
          {
            username :this.defaultname,
            email : 'pri@gmail.com',
            gender : 'female'
          }
      }
    )
  }

  patchValue(){
   this.signinForm.form.patchValue({
     userdata :{
       username : 'Priyanka',
       gender : 'female'
     }
   })
  }

}
