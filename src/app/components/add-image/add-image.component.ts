import { ImageService } from '../../service/image.service';
import { Image } from './../../model/image';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {
  imageForm!: FormGroup;

  @Output() closeModalAddImageEmitter = new EventEmitter<boolean>();

  constructor(
    private imageService: ImageService,
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

  closeModalAddImage(event: boolean) {
    return this.closeModalAddImageEmitter.emit(event);
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
