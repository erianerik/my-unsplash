import { Alert } from './../../model/alert';
import { BroadcastService } from './../../service/broadcast/broadcast.service';
import { Image } from './../../model/image';
import { ImageService } from './../../service/image.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Modal } from 'src/app/model/modal';

@Component({
  selector: 'app-remove-image',
  templateUrl: './remove-image.component.html',
  styleUrls: ['./remove-image.component.scss']
})
export class RemoveImageComponent implements OnInit {

  @Input() idImage: any;

  modal = new Modal();
  alert = new Alert();
  removeImageForm!: FormGroup;

  constructor(
    private broadcastService: BroadcastService,
    private imageService: ImageService,
    private formBuild: FormBuilder
  ) { }

  ngOnInit(): void {
    this.removeImageForm = this.formBuild.group({ password: ['', Validators.required] });
  }

  closeModal() {
    this.modal.name = 'delete-image';
    this.modal.show = false;
    this.broadcastService.setModalSubject(this.modal);
  }

  removeImage() {
    const fieldPassword = this.removeImageForm.controls['password'];
    if (fieldPassword.invalid) {
      fieldPassword.markAsTouched();
      return;
    }

    let showAlert = new Modal();
    showAlert.show = true;
    showAlert.name = 'alert';
    this.broadcastService.setModalSubject(showAlert);

    this.imageService.removeImage(this.idImage, fieldPassword.value).subscribe((response: any) => {
      this.alert.message = response.message;
      this.alert.type = response.status ? 'success' : 'error';
      this.removeImageForm.reset();
      this.broadcastService.setAlert(this.alert);
      if (response.status) {
        this.updateListImages(this.idImage);
      } else {
        return;
      }
      this.closeModal();
    });
  }

  updateListImages(idImage: any) {
    this.imageService.images = this.imageService.images.filter(image => image.id !== idImage)
    this.imageService.setImages(this.imageService.images);
  }

}
