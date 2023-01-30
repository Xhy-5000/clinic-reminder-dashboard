import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HistoryreminderComponent } from './historyreminder/historyreminder.component';
import { PostreminderComponent } from './postreminder/postreminder.component';
import { ReminderlistComponent } from './reminderlist/reminderlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {path: 'historyreminder', component: HistoryreminderComponent},
  {path: 'postreminder', component: PostreminderComponent},
  {path: 'reminderlist', component: ReminderlistComponent},
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
