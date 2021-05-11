import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contactForm: any = FormGroup
  @ViewChild(FormGroupDirective) formGroupDirective: any = FormGroupDirective;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit() {

    // this rests form group controls 
    if (this.contactForm.valid) {
      setTimeout(() => this.formGroupDirective.resetForm(), 0)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message Sent',
        html:
          'Thank you for connecting with me, ' +
          'I will respond as immediate as i get the message.',

        showConfirmButton: false,
        timer: 6000
      })
    }
  }

}
