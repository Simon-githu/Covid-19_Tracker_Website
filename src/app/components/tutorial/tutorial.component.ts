import { Component, Input, OnInit } from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})


export class TutorialComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<TutorialComponent>) { }

  ngOnInit(): void {
  }
closeDialog(){
this.matDialogRef.close()
}
}
