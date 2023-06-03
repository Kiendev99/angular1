import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotPageComponent } from './pages/not-page/not-page.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { ProductComponent } from './pages/product/product/product.component';

const routes: Routes = [
<<<<<<< Updated upstream
  {path: '',component: HomePageComponent, },
=======
  {path: '',component: HomePageComponent,children: [
    
  ]},
  {path: 'product',component: ProductComponent},
>>>>>>> Stashed changes
  {path: 'admin',component: HomeAdminComponent,},
  {path: '**',component: NotPageComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
