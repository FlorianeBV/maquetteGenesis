import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FilterFieldPipe } from './pipes/filter-field.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { UpdateDataPipe } from './pipes/update-data.pipe';

import {Router} from '@angular/router';
import { routing } from './app.routing';

import {LocalStorageService} from './services/localStorage.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilterFieldPipe,
    OrderByPipe,
    UpdateDataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
