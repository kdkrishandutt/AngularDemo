import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../../../Services/image-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {
  image: any

  constructor(private imageService: ImageServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    debugger;
    this.image = this.imageService.getImage(
      this.route.snapshot.params['id']
    )
  }


}
