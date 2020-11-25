import { Component, OnInit } from '@angular/core';
import { DriverInsertionService } from '../driver-insertion.service';

@Component({
  selector: 'app-view-best-driver',
  templateUrl: './view-best-driver.component.html',
  styleUrls: ['./view-best-driver.component.css']
})
export class ViewBestDriverComponent implements OnInit {

  user:any;
  constructor(private service:DriverInsertionService) { }

  ngOnInit() {
  }
public viewBsetDriver()
{
  let response=this.service.viewBsetDriver();
  response.subscribe((data)=>this.user=data);
}
}
