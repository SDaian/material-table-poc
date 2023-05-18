import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { TableComponent } from './components/table/table.component';
import { UserTableComponent } from './components/user-table/user-table.component';

import { DataPropertyGetterPipe } from './pipes/data-property-getter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserTableComponent,
    DataPropertyGetterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
