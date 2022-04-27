import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../model/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url: string = 'http://localhost:8080/image/';
  images: Image[] = [];


  constructor(
    private httpCliente: HttpClient,
  ) { }

  getImages(): Observable<Image[]> {
    return this.httpCliente.get<Image[]>(this.url);
  }

  addImage(image: Image): Observable<Image> {
    return this.httpCliente.post<Image>(this.url, image);
  }

  removeImage(idImage: any, password: string) {
    this.images = this.images.filter(image => image.id !== idImage);
    return this.httpCliente.delete(`${this.url}${idImage}`, {body: password});
  }

}
