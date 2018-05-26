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
import {GreeterComponent} from './greeter/greeter.component';

const appRoutes: Routes = [
  {path: 'field', component: FieldComponent},
  {path: 'referee', component: RefereeComponent},
  {path: '**', component: GreeterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RefereeComponent,
    SettingsComponent,
    MinuteSecondsPipe,
    TeamComponent,
    FieldComponent,
    GreeterComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    ),
    BrowserModule, HttpClientModule, MaterialModule, BrowserAnimationsModule
  ],
  providers: [RefereeService, VisionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
