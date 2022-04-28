import { Alert } from './../../model/alert';
import { Modal } from './../../model/modal';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private modalSubject = new Subject<Modal>();
  private alertSubject = new Subject<Alert>();

  constructor() { }

  setModalSubject(modal: Modal) {
    this.modalSubject.next(modal);
  }

  getModalSubject(): Observable<Modal> {
    return this.modalSubject.asObservable();
  }

  setAlert(alert: Alert) {
    this.alertSubject.next(alert);
  }
  showAlert(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }
}
