import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServersHeaderComponent } from './Components/ServerParentChild/servers-header/servers-header.component';
import { ServersDetailsComponent } from './Components/ServerParentChild/servers-details/servers-details.component';
import { AutoCompleteComponent } from './Components/auto-complete/auto-complete.component';
import { CountryService } from './Services/country-service.service'
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { CompLifecycleComponent } from './Components/comp-lifecycle/comp-lifecycle.component';
import { OrderListModule } from 'primeng/orderlist';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { PipesImplementsComponent } from './Components/PipesImplementation/pipes-implements/pipes-implements.component';
import { INRCurrencyPipe } from './Pipes/inrcurrency-pipe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { GetChildValueComponent } from './Components/ChildComponentValue/get-child-value/get-child-value.component';
import { ChildcomponetComponent } from './Components/ChildComponentValue/childcomponet/childcomponet.component';
import { ChildvialocalvariableComponent } from './Components/ParentinteractswithchildViaLocalVariable/childvialocalvariable/childvialocalvariable.component';
import { ParentvialocalvariableComponent } from './Components/ParentinteractswithchildViaLocalVariable/parentvialocalvariable/parentvialocalvariable.component';
import { ChildviaviewchildComponent } from './Components/ParentinteractswithchildViaLocalVariable/childviaviewchild/childviaviewchild.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateTextComponent } from './Components/translate-text/translate-text.component';
import { WebCamComponent } from './Components/WebCam/web-cam/web-cam.component';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './Components/WebCam/camera/camera.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './Components/drag-and-drop/drag-and-drop.component';
import { MatCardModule } from '@angular/material';
import { DynamicControlsComponent } from './Components/dynamic-controls/dynamic-controls.component';
import { AngularGridComponent } from './Components/angular-grid/angular-grid.component';
import { AgGridModule } from 'ag-grid-angular';
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
    PipesImplementsComponent,
    INRCurrencyPipe,
    GetChildValueComponent,
    ChildcomponetComponent,
    ChildvialocalvariableComponent,
    ParentvialocalvariableComponent,
    ChildviaviewchildComponent,
    TranslateTextComponent,
    WebCamComponent,
    CameraComponent,
    DragAndDropComponent,
    DynamicControlsComponent,
    AngularGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    NgxPaginationModule, Ng2SearchPipeModule, FormsModule, MatSortModule,
    BrowserAnimationsModule, MatPaginatorModule,
    ToastrModule.forRoot(), AutoCompleteModule, HttpClientModule, AngularMultiSelectModule,
    CalendarModule, OrderListModule, AccordionModule, CheckboxModule, RadioButtonModule, WebcamModule,
    DragDropModule, MatCardModule, AgGridModule.withComponents([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ButtoneventService, SortingSearchingServiceService, ImageServiceService,
    FilterimagesPipe, CountryService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}