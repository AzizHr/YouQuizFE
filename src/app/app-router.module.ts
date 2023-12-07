import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {SubjectsComponent} from "./components/subjects/subjects.component";
import {AddSubjectComponent} from "./components/subjects/add-subject/add-subject.component";
import {EditSubjectComponent} from "./components/subjects/edit-subject/edit-subject.component";
import {LevelsComponent} from "./components/levels/levels.component";
import {AddLevelComponent} from "./components/levels/add-level/add-level.component";
import {EditLevelComponent} from "./components/levels/edit-level/edit-level.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {AddQuestionComponent} from "./components/questions/add-question/add-question.component";
import {EditQuestionComponent} from "./components/questions/edit-question/edit-question.component";
import {ResponsesComponent} from "./components/responses/responses.component";
import {AddResponseComponent} from "./components/responses/add-response/add-response.component";
import {EditResponseComponent} from "./components/responses/edit-response/edit-response.component";
import {MediasComponent} from "./components/medias/medias.component";
import {AddMediaComponent} from "./components/medias/add-media/add-media.component";
import {EditMediaComponent} from "./components/medias/edit-media/edit-media.component";
import {ValidationsComponent} from "./components/validations/validations.component";
import {AddValidationComponent} from "./components/validations/add-validation/add-validation.component";
import {EditValidationComponent} from "./components/validations/edit-validation/edit-validation.component";

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
    { path: 'medias/edit/:id', component: EditMediaComponent },
    { path: 'validations', component: ValidationsComponent },
    { path: 'validations/new', component: AddValidationComponent },
    { path: 'validations/edit/:id', component: EditValidationComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}
