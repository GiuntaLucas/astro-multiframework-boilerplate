import { Component, inject, Input, NgZone } from '@angular/core';
import { enterZone } from '../pipe/angular-enter-zone';
import {helloSubject} from '../stores/hello.store';
@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <h1 class="text-red-500">Hello {{name}}</h1>
    <button (click)="toggle()">Yo</button>
    <p>{{yo}}</p>

  `,
})
export class AngularHello {
  yo = '';
  @Input() name: string;
  private readonly ngZone = inject(NgZone);

  constructor() {
    helloSubject.pipe(enterZone(this.ngZone)).subscribe(x => this.yo = x);
  }

  toggle() {
    helloSubject.next('Yo from Angular');
  }
}