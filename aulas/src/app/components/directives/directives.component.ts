import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size = 24;
  font = 'Arial';
  color = 'green';
  classes = ['purple-title', 'small-title']
  underline = 'underline-title'
}
