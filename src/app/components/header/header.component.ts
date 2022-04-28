import { Modal } from 'src/app/model/modal';
import { BroadcastService } from './../../service/broadcast/broadcast.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modal = new Modal();

  constructor(
    private broadcastService: BroadcastService
  ) { }

  ngOnInit(): void {
  }

  showModal() {
    this.modal.name = 'add-image';
    this.modal.show = true;
    this.broadcastService.setModalSubject(this.modal);
  }

}
