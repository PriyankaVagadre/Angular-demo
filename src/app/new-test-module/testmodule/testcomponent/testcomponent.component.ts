import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import 'rxjs/Rx'

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss']
})
export class TestcomponentComponent implements OnInit {

  //-----template driven forms--------//
  @ViewChild('form') signinForm : NgForm;
  defaultname ='pri';
  genders = ['male','female']
  userinfo = {
    username : '',
    email : '',
    gender : ''
  }
  sumitted = false;
 //-----template driven forms--------//

   //-----reactive forms -------//
   reactiveForm : FormGroup;

   //-----reactive forms -------//

  constructor() { }

  ngOnInit() {

   //-----reactive forms -------//
    this.reactiveForm = new FormGroup({
     'ruserdata' : new FormGroup({
        'rusername' : new FormControl('ptest', Validators.required),
        'remail' : new FormControl('', [Validators.required, Validators.email]),
      }),
      'hobbies' : new FormArray([]),
      'rgender' : new FormControl('female')
    })
    this.reactiveForm.valueChanges.subscribe(value=>{
      console.log(value);
    })

    this.reactiveForm.statusChanges.subscribe(status =>{
      console.log(status);

    })
  //-----reactive forms -------//

  }

  //-----template driven forms--------//

  onSubmit(){
    //console.log(form.value);
   console.log(this.signinForm);
   this.sumitted = true;
   this.userinfo.username = this.signinForm.value.userdata.username;
   this.userinfo.email = this.signinForm.value.userdata.email;
   this.userinfo.gender = this.signinForm.value.userdata.gender;
   //this.signinForm.reset();
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
  resetForm(){
    this.signinForm.reset();
  }
  //-----template driven forms--------//


  //-----reactive forms -------//
  submit(){
    console.log(this.reactiveForm.value);
    console.log(this.reactiveForm);
  }
  addHobbies(){
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('hobbies')).push(controls)
  }
  //-----reactive forms -------//

}
