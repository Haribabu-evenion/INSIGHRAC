import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpportunityAssessmentComponent } from './opportunity-assessment/opportunity-assessment.component';
import { SavingValueComponent } from './opportunity-assessment/saving-value/saving-value.component';
import { SourceableSpendComponent } from './opportunity-assessment/sourceable-spend/sourceable-spend.component';
import { CostReductionComponent } from './opportunity-assessment/cost-reduction/cost-reduction.component';
import { CostAvoidanceComponent } from './opportunity-assessment/cost-avoidance/cost-avoidance.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    OpportunityAssessmentComponent,
    SavingValueComponent,
    SourceableSpendComponent,
    CostReductionComponent,
    CostAvoidanceComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CollapseModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
