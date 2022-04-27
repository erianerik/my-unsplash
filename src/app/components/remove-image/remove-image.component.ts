import { Image } from './../../model/image';
import { ImageService } from './../../service/image.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remove-image',
  templateUrl: './remove-image.component.html',
  styleUrls: ['./remove-image.component.scss']
})
export class RemoveImageComponent implements OnInit {

  @Output() closeModalEmitter = new EventEmitter<boolean>();
  @Input() idImage: any;

  removeImageForm!: FormGroup;

  constructor(
    private imageService: ImageService,
    private formBuild: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.idImage);
    this.removeImageForm = this.formBuild.group({ password: ['', Validators.required] });
  }

  closeModal(closeModal: boolean) {
    this.closeModalEmitter.emit(closeModal);
  }

  removeImage() {
    const fieldPassword = this.removeImageForm.controls['password'];
    if(fieldPassword.invalid) {
      fieldPassword.markAsTouched();
      return;
    }
    this.imageService.removeImage(this.idImage, fieldPassword.value).subscribe((response) => {
      console.log(response);
    });
  }

}
