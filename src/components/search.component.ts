import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { searchSubject } from "../stores/search.store";

@Component({
  selector: "app-hello",
  imports: [CommonModule, FormsModule],
  standalone: true,
  template: `<input
    type="text"
    [(ngModel)]="search" (keyup)="searchChange($event)"
  />`,
})
export class AngularSearch {
  search!: string;

  constructor() {}

  searchChange(e: any) {
    searchSubject.next(this.search);
  }
}
