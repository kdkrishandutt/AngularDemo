import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../../../Services/image-service.service';
@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html',
  styleUrls: ['./imagegallery.component.scss']
})
export class ImagegalleryComponent implements OnInit {
  images: any[];
  filterBy?: string = 'all'
  allImages: any[] = [];
  constructor(private imageService: ImageServiceService) {
    
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

}
