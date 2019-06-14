import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MatSortModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { EventPropertybindingComponent } from './Components/event-propertybinding/event-propertybinding.component';
import { ButtoneventService } from './Services/buttonevent.service';
import { FormOperationComponent } from './Components/form-operation/form-operation.component';
import { SortingSearchingComponent } from './Components/sorting-searching/sorting-searching.component';
import { SortingSearchingServiceService } from './Services/sorting-searching-service.service';
import { ImagegalleryComponent } from './Components/ImageGalleryApp/imagegallery/imagegallery.component';
import { ImageDetailsComponent } from './Components/ImageGalleryApp/image-details/image-details.component';
import { ImageServiceService } from './Services/image-service.service';
import { FilterimagesPipe } from './Pipes/filterimages.pipe';
import { HyphenSlashPipe } from './Pipes/hypenToSlash.pipe';
import { EncryptionDescryptionSampleComponent } from './Components/encryption-descryption-sample/encryption-descryption-sample.component';
import { ServersComponent } from './Components/servers/servers.component';
import { ServersWithParnentchildComponent } from './Components/ServerParentChild/servers-with-parnentchild/servers-with-parnentchild.component';
import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
import { ServersHeaderComponent } from './Components/ServerParentChild/servers-header/servers-header.component';
import { ServersDetailsComponent } from './Components/ServerParentChild/servers-details/servers-details.component';
import { AutoCompleteComponent } from './Components/auto-complete/auto-complete.component';
import { CountryService } from './Services/country-service.service'
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { CompLifecycleComponent } from './Components/comp-lifecycle/comp-lifecycle.component';
import { DirectiveExampleComponent } from './Components/directive-example/directive-example.component';
import { BasicDirectiveDirective } from './Directives/basic-directive.directive';
import {OrderListModule} from 'primeng/orderlist';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import{ CheckboxModule} from 'primeng/components/checkbox/checkbox' ;
import{ RadioButtonModule} from 'primeng/components/radiobutton/radiobutton' ;
import { from } from 'rxjs';
import { PipesImplementsComponent } from './Components/PipesImplementation/pipes-implements/pipes-implements.component';
import { INRCurrencyPipe } from './Pipes/inrcurrency-pipe.pipe';
const appRoutes: Routes = [
  { path: '', component: EventPropertybindingComponent },
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
  { path: 'DirectiveExampleComponent', component: DirectiveExampleComponent },
  { path: 'PipesImplementsComponent', component: PipesImplementsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, NavBarComponent, EventPropertybindingComponent, FormOperationComponent,
    SortingSearchingComponent,
    ImagegalleryComponent, ImageDetailsComponent,
    FilterimagesPipe,
    HyphenSlashPipe,
    EncryptionDescryptionSampleComponent,
    ServersComponent,
    ServersWithParnentchildComponent,
    ServersHeaderComponent,
    ServersDetailsComponent,
    AutoCompleteComponent,
    CompLifecycleComponent,
    DirectiveExampleComponent,
    BasicDirectiveDirective,
    PipesImplementsComponent,
    INRCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule,
    NgxPaginationModule, Ng2SearchPipeModule, FormsModule, MatSortModule,
    BrowserAnimationsModule, MatPaginatorModule,
    ToastrModule.forRoot(), AutoCompleteModule, HttpClientModule, AngularMultiSelectModule, 
    CalendarModule,OrderListModule,AccordionModule,CheckboxModule,RadioButtonModule
    ],
  providers: [ButtoneventService, SortingSearchingServiceService, ImageServiceService,
    FilterimagesPipe, CountryService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
