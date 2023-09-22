import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule ,
    BrowserModule ,
    HttpClientModule ,
    RouterModule
  ],
  exports : [HeaderComponent , SpinnerComponent , SelectComponent]
})
export class SharedModule { }
