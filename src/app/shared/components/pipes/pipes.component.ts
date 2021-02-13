import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
valorMonetario = 300.666666666;
data = new Date;

filme = {
  'title':'HARRY POTTER',
  'stars':4.5
}

compras = [{
  produto: 'lâmpadas',
  valor: 299.29,
  quantidade: 2,
  peso: 0.6,
  data: new Date(2020, 1, 1, 15, 20),
  }, {
  produto: 'farinha',
  valor: 450.29,
  peso: 29.33333,
  quantidade: 2,
  data: new Date(2020, 1, 10, 19, 30),
  }]; 

}
