import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { DirectiveExampleComponent } from '../Components/directive-example/directive-example.component';
import { BasicDirectiveDirective } from '../Directives/basic-directive.directive';

@NgModule({
  declarations: [DirectiveExampleComponent,BasicDirectiveDirective],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
