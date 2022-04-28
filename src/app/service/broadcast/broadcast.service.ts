import { Modal } from './../../model/modal';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private modalSubject = new Subject<Modal>();

  constructor() { }
 
  setModalSubject(modal: Modal) {
    this.modalSubject.next(modal);
  }

  getModalSubject(): Observable<Modal> {
    return this.modalSubject.asObservable();
  }
}
