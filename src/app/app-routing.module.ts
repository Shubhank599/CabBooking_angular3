import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteDriverComponent } from './delete-driver/delete-driver.component';
import { InsertDriverComponent } from './insert-driver/insert-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { ViewBestDriverComponent } from './view-best-driver/view-best-driver.component';
import { ViewDriverComponent } from './view-driver/view-driver.component';

const routes: Routes = [
  //{path:"",redirectTo:"Insert",pathMatch:"full"},
  {path:"Insert",component:InsertDriverComponent},
  {path:"Update",component:UpdateDriverComponent},
  {path:"Delete",component:DeleteDriverComponent},
  {path:"viewDriver",component:ViewDriverComponent},
  {path:"ViewBestDriverrt",component:ViewBestDriverComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
