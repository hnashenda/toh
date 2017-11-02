import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'radio-demo',
  templateUrl: 'radio.component.html',
  styleUrls: ['radio.component.css'],
})
export class RadioComponent {
  isAlignEnd: boolean = false;
  isDisabled: boolean = false;
  isRequired: boolean = false;
  favoriteSeason: string = 'Autumn';
  seasonOptions = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
