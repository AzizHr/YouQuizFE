import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubjectsComponent } from "./subjects/subjects.component";
import { AddSubjectComponent } from "./subjects/add-subject/add-subject.component";
import { EditSubjectComponent } from "./subjects/edit-subject/edit-subject.component";
import { LevelsComponent } from "./levels/levels.component";
import { AddLevelComponent } from "./levels/add-level/add-level.component";
import { EditLevelComponent } from "./levels/edit-level/edit-level.component";
import { QuestionsComponent } from "./questions/questions.component";
import { AddQuestionComponent } from "./questions/add-question/add-question.component";
import { EditQuestionComponent } from "./questions/edit-question/edit-question.component";
import { ResponsesComponent } from "./responses/responses.component";
import { AddResponseComponent } from "./responses/add-response/add-response.component";
import { EditResponseComponent } from "./responses/edit-response/edit-response.component";
import { MediasComponent } from "./medias/medias.component";
import { AddMediaComponent } from "./medias/add-media/add-media.component";
import { EditMediaComponent } from "./medias/edit-media/edit-media.component";

const routes: Routes = [
    { path: '', redirectTo: "subjects", pathMatch: 'full' },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'subjects/new', component: AddSubjectComponent },
    { path: 'subjects/edit/:id', component: EditSubjectComponent },
    { path: 'levels', component: LevelsComponent },
    { path: 'levels/new', component: AddLevelComponent },
    { path: 'levels/edit/:id', component: EditLevelComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'questions/new', component: AddQuestionComponent },
    { path: 'questions/edit/:id', component: EditQuestionComponent },
    { path: 'responses', component: ResponsesComponent },
    { path: 'responses/new', component: AddResponseComponent },
    { path: 'responses/edit/:id', component: EditResponseComponent },
    { path: 'medias', component: MediasComponent },
    { path: 'medias/new', component: AddMediaComponent },
    { path: 'medias/edit/:id', component: EditMediaComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}