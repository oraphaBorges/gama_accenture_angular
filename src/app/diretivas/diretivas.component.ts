import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent {
deveExibir = true
lista = ['a','b','c','d']
trocarValor(){
  this.deveExibir = !this.deveExibir
}

addItem(item:string){
  this.lista.push(item)
}
}
