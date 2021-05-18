import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myForm;
  submitted = false;
  arrTask = [];

  constructor(public formBuilder: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      tasks: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      alert('All fields are required!');
      return false;
    } else {
      this.arrTask.push(this.myForm.value)
      this.myForm.reset()
    }
  }

  get errorCtr() {
    return this.myForm.controls;
  }

  taskpage() {
    this.route.navigate(['/task', {value: JSON.stringify(this.arrTask)}]);
  }

}
