import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import {HttpClientModule} from '@angular/common/http';
import {DocumentService} from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
