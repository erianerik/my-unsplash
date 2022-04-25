import { ImageServiceService } from './../../service/image-service.service';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images: Image[] = [];

  constructor(
    private imageService: ImageServiceService
  ) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe((images: Image[]) => {
      this.imageService.images = images;
      this.images = images as Image[];
      console.log(this.images)
    });
  }

  removeImage(id: any) {
    console.log("Id da imagem: ", typeof id);
  }

}
