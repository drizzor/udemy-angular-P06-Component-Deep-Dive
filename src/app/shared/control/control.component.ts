import { Component, ElementRef, HostBinding, HostListener, ViewEncapsulation, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('click');
  // }
  label = input.required<{
    name: string;
    for: string;
  }>();
  private el = inject(ElementRef);

  onClick() {
    console.log('click');
    console.log(this.el.nativeElement);
  }
}
