import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandlekurvSideComponent } from './handlekurv-side/handlekurv-side.component';
import { HjemComponent } from './hjem/hjem.component';


const routes: Routes = [
  {
    path: "handlekurv",
    component: HandlekurvSideComponent},
  {
    path: "",
    component: HjemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
