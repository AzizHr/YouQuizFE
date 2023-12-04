import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubjectsComponent } from "./subjects/subjects.component";
import { AddSubjectComponent } from "./subjects/add-subject/add-subject.component";
import { EditSubjectComponent } from "./subjects/edit-subject/edit-subject.component";
import { LevelsComponent } from "./levels/levels.component";
import { AddLevelComponent } from "./levels/add-level/add-level.component";
import { EditLevelComponent } from "./levels/edit-level/edit-level.component";

const routes: Routes = [
    { path: '', redirectTo: "subjects", pathMatch: 'full' },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'subjects/new', component: AddSubjectComponent },
    { path: 'subjects/edit/:id', component: EditSubjectComponent },
    { path: 'levels', component: LevelsComponent },
    { path: 'levels/new', component: AddLevelComponent },
    { path: 'levels/edit/:id', component: EditLevelComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}