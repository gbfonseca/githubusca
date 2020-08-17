import { CoreModule } from './components/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { RecentUserComponent } from './components/recent-user/recent-user.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RecentUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
