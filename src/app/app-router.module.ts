import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubjectsComponent } from "./subjects/subjects.component";
import { addSubjectComponent } from "./subjects/add-subject/add-subject.component";

const routes: Routes = [
    { path: '', redirectTo: "/", pathMatch: 'full' },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'subjects/new', component: addSubjectComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}