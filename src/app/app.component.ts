import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addImageModal = false;
  removeImageModal = false;

  showModalAddImage(event: boolean) {
    this.addImageModal = event;
  }

  closeModalAddImage(event: boolean) {
    this.addImageModal = event;
  }

}
