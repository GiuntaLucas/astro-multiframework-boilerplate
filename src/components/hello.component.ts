import { Component, inject, Input, NgZone, OnInit, SimpleChanges } from '@angular/core';
import { enterZone } from '../pipe/angular-enter-zone';
import {helloSubject} from '../stores/hello.store';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <h2 class="text-red-500">Hello {{name}}</h2>
    <button (click)="toggle()">Yo</button>
    <p>{{yo}}</p>

  `,
})
export class AngularHello implements OnInit {
  yo!: string;
  @Input() name!: string;
  private readonly ngZone = inject(NgZone);

  constructor() {
    helloSubject.pipe(enterZone(this.ngZone)).subscribe(x => this.yo = x);
  }
  ngOnInit(): void {
    console.log(this.name)
  }

  toggle() {
    helloSubject.next('Yo from Angular');
  }
}