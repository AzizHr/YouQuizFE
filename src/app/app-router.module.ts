import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubjectsComponent } from "./subjects/subjects.component";

const routes: Routes = [
    { path: '', redirectTo: "/", pathMatch: 'full' },
    { path: 'subjects', component: SubjectsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}