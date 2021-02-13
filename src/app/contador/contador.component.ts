import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  @Input() valor:number = 0
  @Output() outCount = new EventEmitter

  @Input() twowdb:number = 0
  @Output() twowdbChange = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
increment(){
  this.valor = this.valor + 1
  this.twowdb = this.twowdb + 1
  this.outCount.emit(this.valor)
}
decrement(){
  this.valor = this.valor - 1
  this.twowdb = this.twowdb - 1
  this.outCount.emit(this.valor)
}
}
