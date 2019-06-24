import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-encryption-descryption-sample',
  templateUrl: './encryption-descryption-sample.component.html',
  styleUrls: ['./encryption-descryption-sample.component.scss']
})
export class EncryptionDescryptionSampleComponent implements OnInit {

  title = 'EncryptionDecryptionSample';

  plainText: string;
  encryptText: string;
  encPassword: string;
  decPassword: string;
  conversionEncryptOutput: string;
  conversionDecryptOutput: string;
  conversionEncryptOutput1: string;
  conversionDecryptOutput1: string;

  constructor() {
  }
  // method is used to encrypt and decrypt the text 
  convertText(conversion: string) {
    if (conversion === 'encrypt') { 
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.plainText.trim(), 'x').toString();
      this.conversionEncryptOutput1 = CryptoJS.AES.encrypt(this.encPassword.trim(), 'x').toString();
    } else {
      this.conversionDecryptOutput = CryptoJS.AES.decrypt(this.encryptText.trim(), 'x').toString(CryptoJS.enc.Utf8);
      this.conversionDecryptOutput1 = CryptoJS.AES.decrypt(this.decPassword.trim(), 'x').toString(CryptoJS.enc.Utf8);

    }
  }
  ngOnInit() {
  }

}
