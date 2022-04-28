import { Modal } from 'src/app/model/modal';
import { BroadcastService } from './service/broadcast/broadcast.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addImageModal = false;
  removeImageModal = false;
  idImage: any;


  constructor(
    private broadcastService: BroadcastService
  ) {
    this.broadcastService.getModalSubject().subscribe((modal: Modal) => {
      if (modal.name === 'add-image') {
        this.addImageModal = modal.show;
      }
      if (modal.name === 'delete-image') {
        this.removeImageModal = modal.show;
        this.idImage = modal.data;
      }
    });
  }
}
