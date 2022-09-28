import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private http:HttpClient)
  {
  }
  // title = "SampleUI";
  onSubmit(data: any)
  {
    this.http.post('http://localhost:8080/metadata', data).subscribe((result)=>console.warn(result));
    console.warn(data);
  }
}
