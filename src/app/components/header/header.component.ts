import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showModalAddImageEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showModalAddImage(event: boolean) {
    this.showModalAddImageEmitter.emit(event);
  }

}
