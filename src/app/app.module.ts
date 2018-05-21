import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RefereeService} from './referee.service';
import {HttpClientModule} from '@angular/common/http';
import {RefereeComponent} from './referee/referee.component';
import {SettingsComponent} from './settings/settings.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MinuteSecondsPipe} from './MinutesSecondsPipe';
import {TeamComponent} from './referee/team/team.component';
import {FieldComponent} from './field/field.component';
import {RouterModule, Routes} from '@angular/router';
import {VisionService} from './vision.service';

const appRoutes: Routes = [
  {path: 'field', component: FieldComponent},
  {path: '**', component: RefereeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RefereeComponent,
    SettingsComponent,
    MinuteSecondsPipe,
    TeamComponent,
    FieldComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule, HttpClientModule, MaterialModule, BrowserAnimationsModule
  ],
  providers: [RefereeService, VisionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
