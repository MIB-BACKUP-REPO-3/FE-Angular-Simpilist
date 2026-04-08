import { MenuItem } from './../../../core/model/menu.model';
import { Component, EventEmitter, input, InputSignal, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-ui',
  imports: [],
  templateUrl: './header-ui.html',
  styleUrl: './header-ui.css',
})
export class HeaderUi {
  menu: InputSignal<MenuItem[]> = input<MenuItem[]>([]);
  @Output()
  itemClick = new EventEmitter<MenuItem>();
}
