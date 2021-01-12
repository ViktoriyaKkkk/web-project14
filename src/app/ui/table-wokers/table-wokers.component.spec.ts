import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWokersComponent } from './table-wokers.component';

describe('TableWokersComponent', () => {
  let component: TableWokersComponent;
  let fixture: ComponentFixture<TableWokersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWokersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
