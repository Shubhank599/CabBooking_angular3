import { Component, OnInit } from '@angular/core';
import { DriverInsertionService } from '../driver-insertion.service';

@Component({
  selector: 'app-delete-driver',
  templateUrl: './delete-driver.component.html',
  styleUrls: ['./delete-driver.component.css']
})
export class DeleteDriverComponent implements OnInit {

  deleted:any;
  constructor(private service:DriverInsertionService) { }

  ngOnInit(): void {
  }
  public delete(id:any){
    let response = this.service.delete(id);
    response.subscribe((data)=>this.deleted=data);
  }
}
