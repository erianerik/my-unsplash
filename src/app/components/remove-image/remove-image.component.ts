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
  removeImageForm!: FormGroup;

  constructor(
    private broadcastService: BroadcastService,
    private imageService: ImageService,
    private formBuild: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.idImage);
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
    this.imageService.removeImage(this.idImage, fieldPassword.value).subscribe((response) => {
      console.log(response);
    });
  }

}
