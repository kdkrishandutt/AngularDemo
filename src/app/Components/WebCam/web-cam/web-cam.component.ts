import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-web-cam',
  templateUrl: './web-cam.component.html',
  styleUrls: ['./web-cam.component.scss']
})
export class WebCamComponent implements OnInit {
  public webcamImage: WebcamImage = null;
  webimg: WebcamImage[] = [];
  constructor() { }

  ngOnInit() {
  }
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.webimg.push(webcamImage);
  }

}
