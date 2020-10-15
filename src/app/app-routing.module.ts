import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MynewcomponentComponent } from './mynewcomponent/mynewcomponent.component';

const routes: Routes = [
  {path: 'mynewcomponent', component: MynewcomponentComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
