import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../model/image';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url: string = 'http://localhost:8080/image/';
  private imageSubject = new Subject<Image[]>();

  images: Image[] = [];

  constructor(
    private httpCliente: HttpClient,
  ) { }

  getUpdateImage() {
    return this.imageSubject.asObservable();
  }

  getImages(): Observable<Image[]> {
    return this.httpCliente.get<Image[]>(this.url);
  }

  setImages(images: Image[]) {
    this.imageSubject.next(images);
  }

  addImage(image: Image): Observable<Image> {
    return this.httpCliente.post<Image>(this.url, image);
  }

  removeImage(idImage: any, password: string) {
    return this.httpCliente.delete(`${this.url}${idImage}`, { body: password });
  }

}
