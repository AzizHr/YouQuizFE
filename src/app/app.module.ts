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
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
import { EditSubjectComponent } from './subjects/edit-subject/edit-subject.component';
import { LevelsComponent } from './levels/levels.component';
import { AddLevelComponent } from './levels/add-level/add-level.component';
import { EditLevelComponent } from './levels/edit-level/edit-level.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { ResponsesComponent } from './responses/responses.component';
import { AddResponseComponent } from './responses/add-response/add-response.component';
import { EditResponseComponent } from './responses/edit-response/edit-response.component';
import { MediasComponent } from './medias/medias.component';
import { AddMediaComponent } from './medias/add-media/add-media.component';
import { EditMediaComponent } from './medias/edit-media/edit-media.component';

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
    AddSubjectComponent,
    EditSubjectComponent,
    LevelsComponent,
    AddLevelComponent,
    EditLevelComponent,
    QuestionsComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    ResponsesComponent,
    AddResponseComponent,
    EditResponseComponent,
    MediasComponent,
    AddMediaComponent,
    EditMediaComponent,
  ],
  imports: [BrowserModule, AppRouterModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
