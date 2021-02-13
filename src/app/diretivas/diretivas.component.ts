import { Component, OnInit } from '@angular/core';
import { IMG_BASE_URL, MEMES_AGRUPADOS_POR_CATEGORIA } from './diretivas.component.constants';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent {
  IMG_BASE_URL = IMG_BASE_URL
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

deveExibir = true
lista = ['a','b','c','d']
trocarValor(){
  this.deveExibir = !this.deveExibir
}

addItem(item:string){
  this.lista.push(item)
}
}
