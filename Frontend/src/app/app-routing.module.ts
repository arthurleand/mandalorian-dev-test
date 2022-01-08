import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TaskComponent } from "./task/task.component";

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path: 'home', component: HomeComponent},
{path:'task/view/:key', component: TaskComponent}

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}