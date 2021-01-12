export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    number: string;
}
export enum MyWorkerType {
    programmer,
    designer,
    copywritter,
    manager,
}
//  export let MyWorkersDatabase: MyWorker[] = [
//      {id: 1, name: 'Иван', surname: 'Иванов', type: 0, number: '+7(987)321-11-22'},
//      {id: 2, name: 'Пётр', surname: 'Петров', type: 1, number: '+7(987)321-33-44'},
//      {id: 3, name: 'Леонид', surname: 'Голубков', type: 2, number: '+7(987)321-55-66'},
//      {id: 4, name: 'Иван', surname: 'Васильев', type: 3, number: '+7(987)321-77-88'},
//  ];