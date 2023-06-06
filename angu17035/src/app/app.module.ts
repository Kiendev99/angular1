import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IonicModule } from '@ionic/angular';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { NotPageComponent } from './pages/not-page/not-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CProductComponent } from './pages/c-product/c-product.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { TrangchuAdminComponent } from './pages/admin/trangchu-admin/trangchu-admin.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeAdminComponent,
    NotPageComponent,
    FooterComponent,
    HeaderComponent,

    SignupComponent,
    SigninComponent,
    CProductComponent,
    AddProductComponent,
    TrangchuAdminComponent


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
