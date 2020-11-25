import { Component, OnInit } from '@angular/core';
import { DriverInsertionService } from '../driver-insertion.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {
  update:any;

  constructor(private service:DriverInsertionService) { }

  ngOnInit(): void {
  
  }
 /* pulic updateDriver(driver:any){
    let response = this.service.updateDriver(this.driver);
    response.subscribe((data)=>this.update=data);
  }
  */

}
