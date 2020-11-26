import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverInsertionService } from '../driver-insertion.service';

@Component({
  selector: 'app-driver-crud-operation',
  templateUrl: './driver-crud-operation.component.html',
  styleUrls: ['./driver-crud-operation.component.css']
})
export class DriverCrudOperationComponent implements OnInit {
  driver: Driver = new Driver("", "", "", "", "", "");
  user: any;

  constructor(private service: DriverInsertionService) { }

  ngOnInit(): void {
  }
  public InsertNow() {
    let response = this.service.doInsertion(this.driver);
    response.subscribe((data: any) => this.driver = data);
  }
  public updateDriver() {
    let resp = this.service.updateDriver(this.driver);
    resp.subscribe((data: any) => this.driver = data);
  }
  public delete() {
    let resp = this.service.delete(this.driver);
    resp.subscribe((data: any) => this.driver = data);
  }
  public viewBsetDriver() {
    let response = this.service.viewBsetDriver();
    response.subscribe((data) => this.user = data);
  }
}