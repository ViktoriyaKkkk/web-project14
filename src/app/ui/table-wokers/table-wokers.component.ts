import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-wokers',
  templateUrl: './table-wokers.component.html',
  styleUrls: ['./table-wokers.component.css']
})
export class TableWokersComponent implements OnInit {

  @Input() title: string;
  @Input() workers: MyWorker[] = [];

  @Output() deleteWorker = 
  new EventEmitter<number>();

  @Output() editWorker =
  new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number) {
    //emit - триггер события
    this.deleteWorker.emit(id);
  }

  onEditWorker(worker){
    this.editWorker.emit(worker)
  }

}
