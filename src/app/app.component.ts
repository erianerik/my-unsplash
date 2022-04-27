import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addImageModal = false;
  removeImageModal = false;
  idImage:any;

  showModalAddImage(event: boolean) {
    this.addImageModal = event;
  }
  
  showRemoveImageModal(idImage: any) {
    this.idImage = idImage;
    this.removeImageModal = idImage ? true : false;
  }

  closeModalAddImage(event: boolean) {
    this.addImageModal = event;
  }

  closeModal(closeModal: boolean) {
    this.removeImageModal = closeModal;
  }


}
