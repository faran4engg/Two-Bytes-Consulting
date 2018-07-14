import { TagInputModule } from 'ngx-chips';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule( {
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TagInputModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
} )
export class AppModule { }
