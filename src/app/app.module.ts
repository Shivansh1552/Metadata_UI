import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StepsComponent } from './steps/steps.component';
import { StepsConfigComponent } from './steps/steps-config/steps-config.component';
import { StaticContentComponent } from './steps/steps-config/static-content/static-content.component';
import { ApiDisplayComponent } from './steps/steps-config/api-display/api-display.component';
import { StaticPageEntryComponent } from './steps/steps-config/static-page-entry/static-page-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    StepsConfigComponent,
    StaticContentComponent,
    ApiDisplayComponent,
    StaticPageEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
