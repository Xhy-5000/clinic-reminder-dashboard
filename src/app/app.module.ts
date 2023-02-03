import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostreminderComponent } from './postreminder/postreminder.component';
import { HistoryreminderComponent } from './historyreminder/historyreminder.component';
import { ReminderlistComponent } from './reminderlist/reminderlist.component';
import { LoginComponent } from './login/login.component';

// 一定要在BrowserModule模块后面import
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
