import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }
  // this function recieves an element id of a section that it has to scroll to  
  // uses viewportscroller to scroll to the section
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit(): void {
  }

}
