import { Component, OnInit } from '@angular/core';
import { DriverInsertionService } from '../driver-insertion.service';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css']
})
export class ViewDriverComponent implements OnInit {

  constructor(private service:DriverInsertionService) { }

  ngOnInit(): void {
    
  }

}
