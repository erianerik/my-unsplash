import { ImageService } from '../../service/image.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  @Output() showRemoveModalEmitter = new EventEmitter<any>();
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

  showRemoveImageModal(id: any) {
   this.showRemoveModalEmitter.emit(id);
  }

}
