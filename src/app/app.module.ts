import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './ProductADD/ProductADD.component';
import { BoardModeratorComponent } from './BidDetails/BidDetails.component';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ProductsComponent } from './products/products.component';
import { PlaceBidComponent } from './place-bid/place-bid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    ProductsComponent,
    PlaceBidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,  
    DateTimePickerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }