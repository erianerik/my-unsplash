import { ImageService } from '../../service/image.service';
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
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe((images: Image[]) => {
      this.imageService.images = images;
      this.images = images as Image[];
    });
  }

  removeImage(id: any) {
    console.log("Id da imagem: ", typeof id);
  }

}
