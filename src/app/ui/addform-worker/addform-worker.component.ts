import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {


  myWorkerType = MyWorkerType;

  addWorkerForm: FormGroup;
  public numberMask = ['+', /[7]/, '(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  @Output() addWorker =
    new EventEmitter<MyWorker>();

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.addWorkerForm = this.formBuild.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      type: [0, Validators.required],
      number: ['', Validators.required],
    })
  }
  submit() {
    console.log(this.addWorkerForm)
  }
  onAddWorker() {
    this.addWorker.emit(this.addWorkerForm.value)
  }



}
