import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";

const routes: Routes = [
    { path: '', redirectTo: "/router-1", pathMatch: 'full' },
    { path: 'router-1', component: SidebarComponent },
    { path: 'router-2', component: SearchbarComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}