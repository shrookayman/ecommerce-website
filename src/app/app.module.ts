import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import {HTTP_INTERCEPTORS, HttpClientModule}  from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './components/mainslider/mainslider.component';
import { CategoriessliderComponent } from './components/categoriesslider/categoriesslider.component';
import { SearchPipe } from './pipes/search.pipe';
import { AddheaderInterceptor } from './interceptors/addheader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    CategoriesComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    MainsliderComponent,
    CategoriessliderComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule

    
  ],
  providers: [
   {
    provide : HTTP_INTERCEPTORS,
    useClass: AddheaderInterceptor,
    multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
