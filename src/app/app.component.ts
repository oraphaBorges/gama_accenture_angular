import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(){
    setTimeout(()=>{
      console.log('Vc mudou o valor');
      this.title = 'Novo titulo 3';
    },2000)

  }


}
