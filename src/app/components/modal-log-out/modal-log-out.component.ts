import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-modal-log-out',
  templateUrl: './modal-log-out.component.html',
  styleUrls: ['./modal-log-out.component.css']
})
export class ModalLogOutComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() accept: EventEmitter<void> = new EventEmitter<void>();

  constructor(){}


  confirm():void{
    this.accept.emit()
  }

  closeModal():void{
    this.close.emit();
  }
}
