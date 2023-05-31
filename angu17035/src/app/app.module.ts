import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {} from 'tailwindcss'
import { IonicModule } from '@ionic/angular';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { NotPageComponent } from './pages/not-page/not-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeAdminComponent,
    NotPageComponent
  ],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
