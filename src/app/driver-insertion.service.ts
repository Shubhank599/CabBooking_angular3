import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverInsertionService {

  constructor(private http:HttpClient) { }

  public doInsertion(driver:any)
  {
    return this.http.post("http://localhost:8079/driver/add",driver,{responseType: 'text' as 'json'});
  }
  public updateDriver(driver:any)
  {
    return this.http.put("http://localhost:8088/driver/update/20",driver,{responseType: 'text' as 'json'});
  }

  public delete(driver:any)
  {
    return this.http.delete("http://localhost:8079/driver/delete/44");
  }
  public viewDriver(driver:any)
  {
    return this.http.get("http://localhost:8088/driver/get/id");
  }
  
  public viewBsetDriver()
  {
    return this.http.get("http://localhost:8088/driver/get/viewBestDriver");
  }
}