import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './sidebar/logo/logo.component';
import { MenuComponent } from './sidebar/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
