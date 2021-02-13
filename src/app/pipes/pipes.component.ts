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

}
