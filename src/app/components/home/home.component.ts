import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
 returnHelpState:boolean=false


 @Output() getHelpReturn:EventEmitter<boolean> = new EventEmitter();
  constructor(private viewportScroller: ViewportScroller) {}
  // this function recieves an element id of a section that it has to scroll to
  // uses viewportscroller to scroll to the section
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit(): void {

  }
helpReturn(){
  this.getHelpReturn.emit(this.returnHelpState)
}

}

