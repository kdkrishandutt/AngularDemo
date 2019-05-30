import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() { }
  allImages = [];    
    
  getImages() {    
      return this.allImages = Imagesdelatils.slice(0);    
  }    
  
  getImage(id: number) {    
      return Imagesdelatils.slice(0).find(Images => Images.id == id)    
  } 
}
const Imagesdelatils = [    
  { "id": 1, "brand": "Apple", "url": "assets/Images/1.jpg" },    
  { "id": 2, "brand": "Apple", "url": "assets/Images/2.png" },    
  { "id": 3, "brand": "hp", "url": "assets/Images/3.jpg" },    
  { "id": 4, "brand": "hp", "url": "assets/Images/4.png" },    
  { "id": 5, "brand": "Lenovo", "url": "assets/Images/5.jpg" },    
  { "id": 6, "brand": "Lenovo", "url": "assets/Images/6.jpg" },    
  { "id": 7, "brand": "asus", "url": "assets/Images/7.jpg" },    
  { "id": 8, "brand": "asus", "url": "assets/Images/8.png" },    
  { "id": 9, "brand": "Lenovo", "url": "assets/Images/9.jpg" },    
  { "id": 10, "brand": "Lenovo", "url": "assets/Images/10.jpg" }, 
  { "id": 11, "brand": "Apple", "url": "assets/Images/1.jpg" },    
  { "id": 12, "brand": "Apple", "url": "assets/Images/2.png" },    
  { "id": 13, "brand": "hp", "url": "assets/Images/3.jpg" },    
  { "id": 14, "brand": "hp", "url": "assets/Images/4.png" },    
  { "id": 15, "brand": "Lenovo", "url": "assets/Images/5.jpg" },    
  { "id": 16, "brand": "Lenovo", "url": "assets/Images/6.jpg" },    
  { "id": 17, "brand": "asus", "url": "assets/Images/7.jpg" },    
  { "id": 18, "brand": "asus", "url": "assets/Images/8.png" },    
  { "id": 19, "brand": "Lenovo", "url": "assets/Images/9.jpg" },    
  { "id": 20, "brand": "Lenovo", "url": "assets/Images/10.jpg" }, 
  { "id": 21, "brand": "Apple", "url": "assets/Images/1.jpg" },    
  { "id": 22, "brand": "Apple", "url": "assets/Images/2.png" },    
  { "id": 23, "brand": "hp", "url": "assets/Images/3.jpg" },    
  { "id": 24, "brand": "hp", "url": "assets/Images/4.png" },    
  { "id": 25, "brand": "Lenovo", "url": "assets/Images/5.jpg" },    
  { "id": 26, "brand": "Lenovo", "url": "assets/Images/6.jpg" },    
  { "id": 27, "brand": "asus", "url": "assets/Images/7.jpg" },    
  { "id": 28, "brand": "asus", "url": "assets/Images/8.png" },    
  { "id": 29, "brand": "Lenovo", "url": "assets/Images/9.jpg" },    
  { "id": 30, "brand": "Lenovo", "url": "assets/Images/10.jpg" },  
  
]   