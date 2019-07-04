import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-translate-text',
  templateUrl: './translate-text.component.html',
  styleUrls: ['./translate-text.component.scss']
})
export class TranslateTextComponent implements OnInit {
  button_name: string = 'Show Implementation';
  show_dialog: boolean = false;
  TranslateModule = 'TranslateModule.forRoot({loader: {provide: TranslateLoader,useFactory: HttpLoaderFactory,deps: [HttpClient]}})';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  toggle() {
    this.show_dialog = !this.show_dialog;
    // CHANGE THE TEXT OF THE BUTTON.
    if (this.show_dialog) {
      this.button_name = 'Hide Implementation!';
    } else {
      this.button_name = 'Show Implementation!';
    }
  }

}
