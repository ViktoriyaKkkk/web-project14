import { Component, OnInit } from '@angular/core';
import { HttpWorkersService } from './shared/services/http-workers.service';
import { MyWorker, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';

  workers: MyWorker[];
  myWokerType = MyWorkerType;

  constructor(private httpWorkerService: HttpWorkersService) { }

  ngOnInit() {
    this.getData();
  }


  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type)
  }

  async getData() {
    try {
      this.workers = await this.httpWorkerService.getWorkers();
    } catch (error) {
      console.log(error)
    }
  }

  async onDeleteWorker(id: number) {
    try {
      await this.httpWorkerService.deleteWorker(id)
    } catch (error) {
      console.error(error)
    } finally {
      await this.getData()
    }
  }
  // onAddworker (worker: MyWorker) {
  //   let id = this.workers.length > 0  
  //   ? this.workers[this.workers.length - 1].id + 1 
  //   : 0;
  //   worker.id = id;
  //   this.workers.push(worker);
  // }
  async onAddWorker(worker: MyWorker) {
    let id = this.workers.length > 0
      ? this.workers[this.workers.length - 1].id + 1
      : 0
    worker.id = id;
    try {
      await this.httpWorkerService.postWorkers(worker)
    } catch (error) {
      console.error(error);
    } finally {
      await this.getData()
    }
  }
  // onEditWorker(editingWorker){
  //   const workerId = this.workers.findIndex(worker => worker.id === editingWorker.id);
  //   (this.workers)[workerId].name = editingWorker.name;
  //   (this.workers)[workerId].surname = editingWorker.surname;
  //   (this.workers)[workerId].number = editingWorker.number;
  // }
  async onEditWorker(editingWorker) {
    try {
      await this.httpWorkerService.editWorker(editingWorker)
    } catch (error) {
      console.error(error)
    } finally {
      await this.getData()
    }
  }
}
