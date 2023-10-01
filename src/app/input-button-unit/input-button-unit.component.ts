import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World!';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
