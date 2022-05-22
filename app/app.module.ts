import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent1 } from './app.component';
import { VedHomeComponent } from './ved-home/ved-home.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { CustomerOtherdetailsComponent } from './customer-otherdetails/customer-otherdetails.component';
import {FormsModule} from '@angular/forms'
 

@NgModule({
   declarations: [                                 //<------  agar hum iss part ko hta be de koi effect nai padega Application mai 
     AppComponent1, CustomerInfoComponent, CustomerAddressComponent, CustomerOtherdetailsComponent,VedHomeComponent
   ],
  imports: [
    BrowserModule,                         //<------    agar hum Browser Module hta denge too Component Browser mai render nai hoga
    AppRoutingModule,
    FormsModule,                       // Agar html file mai routing use ho rhi hai to error dega // // agar html file mai routing use nai ho rhi to hum issai hta sakte hai koi error nai Aayeg
  ],                                       // jo ki app-routing.module.ts mai declare hai 
  providers: [],                            
  bootstrap: [AppComponent1]               // <-----------   agar hum isko hta denge to component render nai hoga Browser mai
})
export class AppModule { }
