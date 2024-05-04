import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'' ,redirectTo:'register' ,pathMatch:'full'},
  {path:'home' ,component: HomeComponent , canActivate: [AuthGuard]},
  {path:'about' ,component: AboutComponent , canActivate: [AuthGuard]},
  {path:'login' ,component: LoginComponent },
  {path:'register' ,component: RegisterComponent },
  {path:'categories' ,component: CategoriesComponent, canActivate: [AuthGuard]},
  {path:'cart' ,component: CartComponent, canActivate: [AuthGuard]},
  {path:'brands' ,component: BrandsComponent, canActivate: [AuthGuard]},
  {path:'products' ,component: ProductsComponent, canActivate: [AuthGuard]},
  {path:'productDetails/:id' ,component: ProductDetailsComponent, canActivate: [AuthGuard]},
  {path:'**' ,component: NotfoundComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
