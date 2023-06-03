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
<<<<<<< HEAD
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CProductComponent } from './pages/c-product/c-product.component';
=======
import { ProductComponent } from './pages/product/product/product.component';
>>>>>>> 923b4557f9c472f828cc14e19810e6bbb11b0f03



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeAdminComponent,
    NotPageComponent,
    FooterComponent,
    HeaderComponent,
<<<<<<< HEAD
    SignupComponent,
    SigninComponent,
    CProductComponent
=======
    ProductComponent
>>>>>>> 923b4557f9c472f828cc14e19810e6bbb11b0f03
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
