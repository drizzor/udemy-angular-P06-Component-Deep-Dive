import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', // Attribute selector a non utilisé mais pour exemple montre que l'on peut utiliser plusieurs  attributs
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
