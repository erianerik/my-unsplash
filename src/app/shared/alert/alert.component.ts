import { Alert } from './../../model/alert';
import { BroadcastService } from './../../service/broadcast/broadcast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  showAlert = false;
  alert = new Alert();
  titleAlert = '';

  constructor(
    private broadcast: BroadcastService
  ) {
    this.broadcast.showAlert().subscribe((alert: Alert) => {
      this.alert = alert
      this.typeAlert();
      this.displayAlert();
    });
  }

  ngOnInit(): void {
  }

  displayAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
    this.showAlert = true;
  }

  typeAlert() {
    this.titleAlert = this.alert.type === 'success' ? 'Sucesso' : 'Erro';
    return this.alert.type === 'success' ? 'success' : 'error';
  }

}
