import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Output() outInfo =  new EventEmitter()
  @Output() twowdbChange =  new EventEmitter()
  

  imgURL = "https://www.vhv.rs/dpng/d/424-4247906_gengar-png-download-mega-gengar-png-transparent-png.png"
  imgWidth = 300
  btnDisabled = false
  TextoAlternativo="oi"
  meuTexto = "oi"
  count=0
  twowdb2=0
  constructor() { }

  ngOnInit(): void {
  }

  clickButton(event: MouseEvent){
    alert('oi')
    console.log(event)    
  }

  changeEnbled(){
    this.btnDisabled = !this.btnDisabled 
  }
  mouseEmcima(){
    this.changeEnbled()
  }

  aoDigitar(event: any){
    this.meuTexto= event.target.value
  }
  onSave(event:any){
    this.outInfo.emit(event)
  }
  outcount(coun:number){
    this.count = coun
  }
  twowdbCahnge(event:number){
    this.twowdb2 = event
  }
}
