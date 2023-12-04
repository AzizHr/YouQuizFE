import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubjectsComponent } from "./subjects/subjects.component";
import { addSubjectComponent } from "./subjects/add-subject/add-subject.component";
import { EditSubjectComponent } from "./subjects/edit-subject/edit-subject.component";

const routes: Routes = [
    { path: '', redirectTo: "subjects", pathMatch: 'full' },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'subjects/new', component: addSubjectComponent },
    { path: 'subjects/edit/:id', component: EditSubjectComponent },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'subjects/new', component: addSubjectComponent },
    { path: 'subjects/edit/:id', component: EditSubjectComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}