import { BroadcastService } from './../../service/broadcast/broadcast.service';
import { ImageService } from '../../service/image.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Image } from 'src/app/model/image';
import { Modal } from 'src/app/model/modal';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  modal = new Modal();
  images: Image[] = [];

  constructor(
    private broadcastService: BroadcastService,
    private imageService: ImageService
  ) { 
    this.imageService.getUpdateImage().subscribe((images: Image[]) => {
      console.log('não entrou?');
      
      this.images = images;
    });
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe((images: Image[]) => {
      this.imageService.images = images;
      this.images = images as Image[];
    });
  }

  showModal(id: any) {
    this.modal.name = 'delete-image';
    this.modal.show = true;
    this.modal.data = id;
    this.broadcastService.setModalSubject(this.modal);
  }

}
