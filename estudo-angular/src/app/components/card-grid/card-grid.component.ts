import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css'
})
export class CardGridComponent {
  @Input() name: string = "";
  @Input() userData!: {email: string, role: string}
}
