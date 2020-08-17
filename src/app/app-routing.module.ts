import { RecentUserComponent } from './components/recent-user/recent-user.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users/:username",
    component: UserComponent
  },
  {
    path: "recentUsers",
    component: RecentUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
