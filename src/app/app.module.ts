import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { InsertDriverComponent } from './insert-driver/insert-driver.component';
//import { DeleteDriverComponent } from './delete-driver/delete-driver.component';
//import { ViewDriverComponent } from './view-driver/view-driver.component';
//import { ViewBestDriverComponent } from './view-best-driver/view-best-driver.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DriverCrudOperationComponent } from './driver-crud-operation/driver-crud-operation.component';
@NgModule({
  declarations: [
    AppComponent,
    //UpdateDriverComponent,
    InsertDriverComponent,
   // DeleteDriverComponent,
   // ViewDriverComponent,
    //ViewBestDriverComponent,
    DriverCrudOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
