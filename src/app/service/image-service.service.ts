import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../model/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  private url: string = 'http://localhost:8080/image';
  images: Image[] = [];
  

  constructor(
    private httpCliente: HttpClient,
  ) { }

  getImages():Observable<Image[]> {
    return this.httpCliente.get<Image[]>(this.url);
  }
}
