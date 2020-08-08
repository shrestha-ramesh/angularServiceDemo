import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { ListComponent } from './list/list.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PipesdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
