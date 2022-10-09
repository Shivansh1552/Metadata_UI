import { Component } from '@angular/core';
import { StepsComponent } from './steps/steps.component';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sections';

  // sectionForm: FormGroup;
 
  // constructor(private fb:FormBuilder) {
 
  //   this.sectionForm = this.fb.group({
  //     steps: this.fb.array([]) ,
  //   });
  
  // }
}
