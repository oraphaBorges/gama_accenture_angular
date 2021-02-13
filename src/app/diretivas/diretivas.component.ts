import { Component, OnInit } from '@angular/core';
import { IMG_BASE_URL, MEMES_AGRUPADOS_POR_CATEGORIA } from './diretivas.component.constants';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  constructor(){
    console.log('construtor');
  }

  ngOnInit(){
    console.log('onInit');
    
  }


  IMG_BASE_URL = IMG_BASE_URL
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  deveExibir = true
  lista = ['a','b','c','d']
    
  classeCss=""

  trocarValor(){
    this.deveExibir = !this.deveExibir
  }

  addItem(item:string){
    this.lista.push(item)
  }

  setRed(){
    this.classeCss = 'vermelho'
  }
  setGreen(){
    this.classeCss = 'verde'
  }
  getClass(valor:number){
    return{
      'vermelho':valor%2==0,
      'verde':valor%2!=0,
    }
  }
}
