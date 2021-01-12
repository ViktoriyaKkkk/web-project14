import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-edit',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public numberMask = ['+', /[1-9]/, '(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  editWorkerForm : FormGroup;

  @Input() name: string;
  @Input() surname: string;
  @Input() id: number;
  @Input() number: string;
  @Input() type: number;
  @Output() editWorker =
    new EventEmitter<object>();

  closeResult = '';

  constructor(private modalService: NgbModal, private formBuild: FormBuilder) {}

  ngOnInit(): void {
    this.editWorkerForm = this.formBuild.group({
      newName: [this.name, Validators.required],
      newSurname: [this.surname, Validators.required],
      newNumber: [this.number, Validators.required],
    })
  }

  onEditWorker(id:number, name: string, surname: string, number: string, type: number){
    this.editWorker.emit({id,name,surname, number, type})
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  close(modal){
    if(this.name != '' && this.surname != '' && this.number != ''){
      this.onEditWorker(this.id, this.editWorkerForm.value.newName, this.editWorkerForm.value.newSurname, this.editWorkerForm.value.newNumber, this.type)
      modal.close()
    }
  }


}
