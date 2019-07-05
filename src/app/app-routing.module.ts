import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventPropertybindingComponent } from './Components/event-propertybinding/event-propertybinding.component';
import { HomeComponent } from './Components/home/home.component';
import { FormOperationComponent } from './Components/form-operation/form-operation.component';
import { SortingSearchingComponent } from './Components/sorting-searching/sorting-searching.component';
import { ImagegalleryComponent } from './Components/ImageGalleryApp/imagegallery/imagegallery.component';
import { ImageDetailsComponent } from './Components/ImageGalleryApp/image-details/image-details.component';
import { EncryptionDescryptionSampleComponent } from './Components/encryption-descryption-sample/encryption-descryption-sample.component';
import { ServersComponent } from './Components/servers/servers.component';
import { ServersWithParnentchildComponent } from './Components/ServerParentChild/servers-with-parnentchild/servers-with-parnentchild.component';
import { AutoCompleteComponent } from './Components/auto-complete/auto-complete.component';
import { CompLifecycleComponent } from './Components/comp-lifecycle/comp-lifecycle.component';
import { PipesImplementsComponent } from './Components/PipesImplementation/pipes-implements/pipes-implements.component';
import { GetChildValueComponent } from './Components/ChildComponentValue/get-child-value/get-child-value.component';
import { ParentvialocalvariableComponent } from './Components/ParentinteractswithchildViaLocalVariable/parentvialocalvariable/parentvialocalvariable.component';
import { TranslateTextComponent } from './Components/translate-text/translate-text.component';
import { WebCamComponent } from './Components/WebCam/web-cam/web-cam.component';
import { DragAndDropComponent } from './Components/drag-and-drop/drag-and-drop.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-event-propertybinding', component: EventPropertybindingComponent },
  { path: 'app-form-operation', component: FormOperationComponent },
  { path: 'SortingSearching', component: SortingSearchingComponent },
  { path: 'ImageGallery', component: ImagegalleryComponent },
  { path: 'ImageDetails/:id', component: ImageDetailsComponent },
  { path: 'EncryptionDescryption', component: EncryptionDescryptionSampleComponent },
  { path: 'ServersComponent', component: ServersComponent },
  { path: 'ServersWithParnentchildComponent', component: ServersWithParnentchildComponent },
  { path: 'AutoCompleteComponent', component: AutoCompleteComponent },
  { path: 'CompLifecycleComponent', component: CompLifecycleComponent },
  { path: 'PipesImplementsComponent', component: PipesImplementsComponent },
  { path: 'GetChildValueComponent', component: GetChildValueComponent },
  { path: 'ParentvialocalvariableComponent', component: ParentvialocalvariableComponent },
  { path: 'DirectiveExampleComponent', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'app-translate-text', component: TranslateTextComponent },
  { path: 'WebCamComponent', component: WebCamComponent },
  { path: 'DragAndDropComponent', component: DragAndDropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
