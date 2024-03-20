import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormsResolver } from './forms.resolver';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    resolve: {
      initial: FormsResolver,
      // user: FormsResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
