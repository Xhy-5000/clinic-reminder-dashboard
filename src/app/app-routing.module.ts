import { NgModule } from '@angular/core';
import { OutletContext, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HistoryreminderComponent } from './historyreminder/historyreminder.component';
import { PostreminderComponent } from './postreminder/postreminder.component';
import { ReminderlistComponent } from './reminderlist/reminderlist.component';
import { AuthGuard } from './guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {path: 'historyreminder', component: HistoryreminderComponent, canActivate: [AuthGuard],},
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
