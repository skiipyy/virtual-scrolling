import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material';
import { TeamsComponent } from './teams/teams.component';
import { TeamsLessComponent } from './teams_less/teams_less.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamsLessComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
