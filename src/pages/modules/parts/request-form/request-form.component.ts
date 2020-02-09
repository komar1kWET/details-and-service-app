import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.sass']
})
export class RequestFormComponent implements OnInit {
  requestForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.requestForm = new FormGroup({
      model: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      parts: new FormControl('', [Validators.required]),
    });
  }

  get model(): AbstractControl {
    return this.requestForm.get('model');
  }

  get year(): AbstractControl {
    return this.requestForm.get('year');
  }

  get parts(): AbstractControl {
    return this.requestForm.get('parts');
  }
}
