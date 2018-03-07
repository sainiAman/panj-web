import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AlbumComponent} from "./album/album.component";
import {AppComponent} from "./app.component";
import {TeamComponent} from "./team/team.component";
import {MainComponent} from "./main/main.component";


const appRoutes: Routes = [
  {path: '', component:MainComponent, pathMatch: 'full'},
  {path: 'client', component: AlbumComponent},
  {path: 'team', component: TeamComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
