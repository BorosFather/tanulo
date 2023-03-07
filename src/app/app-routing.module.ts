import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TauloComponent } from './taulo/taulo.component';

const routes: Routes = [
  {path: "tanulo", component:TauloComponent},
  {path: "about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
