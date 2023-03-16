import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OpportunityAssessmentComponent} from '../app/opportunity-assessment/opportunity-assessment.component'

const routes: Routes = [
  { path: '', component: OpportunityAssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
