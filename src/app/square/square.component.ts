import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square',
  template: `
      <button mat-flat-button color="basic" *ngIf="!value">{{ value }}</button>
      <button mat-flat-button color="accent" *ngIf="value == 'X'">{{ value }}</button>
      <button mat-flat-button color="primary" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}

//button { width: 100%; height: 100%; font-size: 5em !important; background-color: lightblue;}
