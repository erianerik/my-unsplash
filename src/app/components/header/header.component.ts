import { Image } from './../../model/image';
import { ImageService } from './../../service/image.service';
import { Modal } from 'src/app/model/modal';
import { BroadcastService } from './../../service/broadcast/broadcast.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images: Image[] = [];
  modal = new Modal();

  constructor(
    private broadcastService: BroadcastService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
  }

  filterImage(event: any) {
    let text: string = event.target.value.toString();
    this.images = this.imageService.images;
    this.images = this.images.filter(image => image.description.toLocaleLowerCase().includes(text));
    this.imageService.setImages(this.images);

  }


  showModal() {
    this.modal.name = 'add-image';
    this.modal.show = true;
    this.broadcastService.setModalSubject(this.modal);
  }

}
