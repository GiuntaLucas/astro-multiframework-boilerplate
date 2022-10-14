import { CommonModule } from '@angular/common';
import { Component, inject, Input, NgZone, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { enterZone } from '../pipe/angular-enter-zone';
import {helloSubject} from '../stores/hello.store';
import { searchSubject } from '../stores/search.store';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="text-red-500">Hello {{name}}</h2>
    <button (click)="toggle()">Yo</button>
    <p>{{yo}}</p>
    <p>{{search$ | async}}</p>
  `,
})
export class AngularHello implements OnInit, OnDestroy {
  yo!: string;
  @Input() name!: string;
  private readonly ngZone = inject(NgZone);
  search$: Observable<string>;
  private destroy = new Subject();

  constructor() {
    helloSubject.pipe(enterZone(this.ngZone), takeUntil(this.destroy)).subscribe(x => this.yo = x);
    this.search$ = searchSubject.asObservable().pipe(enterZone(this.ngZone));
  }
  
  ngOnInit(): void {
    console.log(this.name)
  }
  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  toggle() {
    helloSubject.next('Yo from Angular click');
  }
}