import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
  panelState: any;
  getPanelOpenState(value: boolean) {
    this.panelState = value;
  }
  constructor() { }

  ngOnInit(): void {
  
}
}