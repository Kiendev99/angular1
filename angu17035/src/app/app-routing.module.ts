import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotPageComponent } from './pages/not-page/not-page.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
<<<<<<< HEAD
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CProductComponent } from './pages/c-product/c-product.component';
=======
import { ProductComponent } from './pages/product/product/product.component';
>>>>>>> 923b4557f9c472f828cc14e19810e6bbb11b0f03

const routes: Routes = [
<<<<<<< Updated upstream
  {path: '',component: HomePageComponent, },
=======
  {path: '',component: HomePageComponent,children: [
    
  ]},
  {path: 'product',component: ProductComponent},
>>>>>>> Stashed changes
  {path: 'admin',component: HomeAdminComponent,},
  {path: 'signup',component: SignupComponent,},
  {path: 'signin',component: SigninComponent,},
  {path: 'chitiet/product',component: CProductComponent,},
  {path: '**',component: NotPageComponent,},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
