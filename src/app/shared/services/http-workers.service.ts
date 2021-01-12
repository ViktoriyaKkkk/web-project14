import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkersService {
  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) { }
  
  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorkers(data: MyWorker) {
    return this.http.post(this.routeApi, data).toPromise();
  }
  
  deleteWorker(id: number){
    let url = `${this.routeApi}/${id}`
    return this.http.delete(url).toPromise();
  }

  editWorker(worker: MyWorker){
    let url = `${this.routeApi}/${worker.id}`
    return this.http.put(url, worker).toPromise();
  }
}
