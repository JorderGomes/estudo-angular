import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  name:string = "Aluguel";
  value:number = 1000;
  type:string = "despesa";
}
