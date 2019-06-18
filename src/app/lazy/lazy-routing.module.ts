import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PipesImplementsComponent } from '../Components/PipesImplementation/pipes-implements/pipes-implements.component';
import { DirectiveExampleComponent } from '../Components/directive-example/directive-example.component';
const routes: Routes = [
  { path: '', component: DirectiveExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
