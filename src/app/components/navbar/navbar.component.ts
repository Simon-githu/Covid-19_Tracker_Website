import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TutorialComponent } from '../tutorial/tutorial.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() getHelp: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private viewportScroller: ViewportScroller,
    private dialog: MatDialog
  ) {}

  // this function recieves an element id of a section that it has to scroll to
  // uses viewportscroller to scroll to the section
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {}
  onClickHelp() {
    this.dialog.open(TutorialComponent, {
      
    });
  }
}
