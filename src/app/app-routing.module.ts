import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
