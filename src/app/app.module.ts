import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostreminderComponent } from './postreminder/postreminder.component';
import { HistoryreminderComponent } from './historyreminder/historyreminder.component';
import { ReminderlistComponent } from './reminderlist/reminderlist.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PostreminderComponent,
    HistoryreminderComponent,
    ReminderlistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
