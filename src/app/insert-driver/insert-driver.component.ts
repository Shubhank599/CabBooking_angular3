import { Component, OnInit } from '@angular/core';
import {Driver} from '../driver';
import { DriverInsertionService } from '../driver-insertion.service';
@Component({
  selector: 'app-insert-driver',
  templateUrl: './insert-driver.component.html',
  styleUrls: ['./insert-driver.component.css']
})
export class InsertDriverComponent implements OnInit {

  driver:Driver = new Driver("","","","","","");
  message:any;


  constructor(private service:DriverInsertionService) { }

  ngOnInit(): void {
  }
  public InsertNow(){
    let response = this.service.doInsertion(this.driver);
    response.subscribe((data:any)=>this.message=data);
  }
}
