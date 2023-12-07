import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { AddLevelComponent } from './components/levels/add-level/add-level.component';
import { EditLevelComponent } from './components/levels/edit-level/edit-level.component';
import { LevelsComponent } from './components/levels/levels.component';
import { AddMediaComponent } from './components/medias/add-media/add-media.component';
import { EditMediaComponent } from './components/medias/edit-media/edit-media.component';
import { MediasComponent } from './components/medias/medias.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { EditQuestionComponent } from './components/questions/edit-question/edit-question.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AddResponseComponent } from './components/responses/add-response/add-response.component';
import { EditResponseComponent } from './components/responses/edit-response/edit-response.component';
import { ResponsesComponent } from './components/responses/responses.component';
import { SearchButtonComponent } from './components/searchbar/search-button/search-button.component';
import { SearchInputComponent } from './components/searchbar/search-input/search-input.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { LogoComponent } from './components/sidebar/logo/logo.component';
import { MenuItemComponent } from './components/sidebar/menu/menu-item/menu-item.component';
import { MenuComponent } from './components/sidebar/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddSubjectComponent } from './components/subjects/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/subjects/edit-subject/edit-subject.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

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
