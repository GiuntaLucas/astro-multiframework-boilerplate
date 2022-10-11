import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, NgZone } from '@angular/core';
import { enterZone } from '../pipe/angular-enter-zone';
import {helloSubject} from '../stores/hello.store';
@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf, CommonModule ],
  styles: ['h1 { color: red; }'],
  template: `
    <h1>Hello Angular</h1>
    <button (click)="toggle()">Yo</button>
    <p>{{yo}}</p>

  `,
})
export class AngularHello {
  yo = '';
  private readonly ngZone = inject(NgZone);

  constructor() {
    helloSubject.pipe(enterZone(this.ngZone)).subscribe(x => this.yo = x)
  }

  toggle() {
    helloSubject.next('Yo from Angular');
  }
}