import { Component } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrl: './emiter.component.css'
})
export class EmiterComponent {
  
  myNumber:number = Math.floor(Math.random() * (100 - 1) + 1);

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * (100 - 1) + 1);
  }  

}
