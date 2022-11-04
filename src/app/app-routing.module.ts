import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { AdmComponent } from './adm/adm.component';

const routes: Routes = [
  { path: 'adm', component: AdmComponent },
  { path: 'xyz', component: XyzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
