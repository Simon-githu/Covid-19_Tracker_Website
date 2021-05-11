import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  panelOpenState = false;
  @Output() getPanelOpenState:EventEmitter<boolean> = new EventEmitter();
  constructor(private data:DataService) { }

  ngOnInit(): void {
  
  }
  panel(){
    this.getPanelOpenState.emit(this.panelOpenState)
  
  }
}
