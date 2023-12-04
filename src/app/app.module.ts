import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './sidebar/logo/logo.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { MenuItemComponent } from './sidebar/menu/menu-item/menu-item.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchInputComponent } from './searchbar/search-input/search-input.component';
import { SearchButtonComponent } from './searchbar/search-button/search-button.component';
import { AppRouterModule } from './app-router.module';
import { SubjectsComponent } from './subjects/subjects.component';
import { addSubjectComponent } from './subjects/add-subject/add-subject.component';
import { EditSubjectComponent } from './subjects/edit-subject/edit-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogoComponent,
    MenuComponent,
    MenuItemComponent,
    SearchbarComponent,
    SearchInputComponent,
    SearchButtonComponent,
    SubjectsComponent,
    addSubjectComponent,
    EditSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
