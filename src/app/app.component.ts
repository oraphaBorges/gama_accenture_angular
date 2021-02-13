import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
  
})
export class AppComponent {
  title = 'app';

  constructor(){
    setTimeout(()=>{
      console.log('Vc mudou o valor');
      this.title = 'Novo titulo 3';
    },2000)

  }

  getEvent(event:any){
    console.log(event);
    
  }


}
