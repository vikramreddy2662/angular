import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { containerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    containerComponent,
    SearchComponent,
    ProductListComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
