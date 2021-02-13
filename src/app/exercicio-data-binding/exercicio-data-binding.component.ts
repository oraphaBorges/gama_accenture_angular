import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {
  imgURL = "https://www.vhv.rs/dpng/d/424-4247906_gengar-png-download-mega-gengar-png-transparent-png.png"
  imgWidth = 300
  btnDisabled = true
  TextoAlternativo="oi"
  constructor() { }

  ngOnInit(): void {
  }

}
