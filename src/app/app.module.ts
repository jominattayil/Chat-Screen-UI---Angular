import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatScreenModule } from './chat-screen/chat-screen.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatScreenModule,
    BrowserAnimationsModule,
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
