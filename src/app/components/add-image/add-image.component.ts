import { BroadcastService } from './../../service/broadcast/broadcast.service';
import { ImageService } from '../../service/image.service';
import { Image } from './../../model/image';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'src/app/model/modal';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {
  imageForm!: FormGroup;
  modal = new Modal();

  constructor(
    private imageService: ImageService,
    private broadcastService: BroadcastService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createImageFrom(new Image());
  }

  createImageFrom(image: Image) {
    this.imageForm = this.formBuilder.group({
      description: [image?.description, [Validators.required]],
      url: [image?.url, [Validators.required]] 
    });
  }

  closeModal() {
    this.modal.name = 'add-image';
    this.modal.show = false;
    this.broadcastService.setModalSubject(this.modal);
  }

  addImage() {
    if(this.validateForm()) {
      this.imageService.addImage(this.imageForm.value).subscribe((response: Image) => {
        this.imageService.images.push(response);
        this.imageForm.reset();
      });
    }
  }

  validateForm(): boolean {
    const formControls = this.imageForm.controls;
    for(let inputForm in formControls) {
      if(formControls[inputForm].invalid) {
         formControls[inputForm].markAsTouched();
      }
    }

    return this.imageForm.valid;
  }
}
