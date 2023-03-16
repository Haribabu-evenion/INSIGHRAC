import { Component, OnInit,TemplateRef, ViewEncapsulation } from '@angular/core';
import {  BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import MockData from '../../assets/mock_data/get_table_data_mock.json';
import { NgModule } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';




@Component({
  selector: 'app-opportunity-assessment',
  templateUrl: './opportunity-assessment.component.html',
  styleUrls: ['./opportunity-assessment.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class OpportunityAssessmentComponent implements OnInit {
  categorySavingEstimatesData: any={};
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  value="Saving";
  modalRef?: BsModalRef;
  tableColumns: any[] = [];
  savingValueTableColumns: any[] = [];

  sourceableSpendTableColumns: any[] = [];
  costReductionTableColumns: any[] = [];
  costAvoidanceTableColumns: any[] = [];


  savingValueOption: any = [];

  isCollapsed: boolean = true;
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
 this.categorySavingEstimatesData =MockData.category_saving_estimates;

 this.tableColumns = this.categorySavingEstimatesData.columns.map((column: string) => ({
  name: column,
  value: true
}));

this.sourceableSpendTableColumns = MockData.sourceable_spend.coloums.map((column: string) => ({
  name: column,
  value: true
}));

this.savingValueTableColumns = MockData.saving_value.columns.map((column: string) => ({
  name: column,
  value: true
}));

this.costReductionTableColumns = MockData.cost_reduction.coloums.map((column: string) => ({
  name: column,
  value: true
}));

this.costAvoidanceTableColumns = MockData.cost_avoidance.coloums.map((column: string) => ({
  name: column,
  value: true
}));

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true,
      lengthMenu: [
        [10, 20, 30, -1],
        [10, 20, 30, 'All'],
      ],
      scrollY: '150vh', /// This is resulting in an error. Appears to be a DataTables bug
      scrollX: true,
      // sScrollX: 100%,
      autoWidth: false,
      columnDefs: [{width: '50%', targets: 8}]
    };
    this.dtTrigger.next(null);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      backdrop: false,
      ignoreBackdropClick: false,
      class: 'modal-align-right'
    });
  }
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  showHideTables(value:any)
  {
      this.value = value;
  }

  toggleColumn(rowIndex: number): void {
    this.tableColumns[rowIndex].value = !this.tableColumns[rowIndex].value;
    const tempSourceData = JSON.parse(JSON.stringify(MockData.category_saving_estimates));
    const newData = {
      columns: [] as any,
      data: []
    };

    this.tableColumns.forEach((columnOption, index) => {
      if (columnOption?.value === true) {
        newData.columns.push(columnOption.name);
      }
    });

    const requirdColumnIndexs = this.tableColumns.map((value, index) => value.value ? index : -1 ).filter(e => e != -1);
    newData.data = tempSourceData.data.map((rowData: any[]) => {
      return requirdColumnIndexs.map(index => rowData[index]);
    });
    this.categorySavingEstimatesData = newData;
  }


  toggleSavingValueTable(row: number) {
    this.savingValueTableColumns[row].value = !this.savingValueTableColumns[row].value;
    this.savingValueTableColumns = [...this.savingValueTableColumns];
  }


  toggleSourceableSpendTable(row: number) {
    this.sourceableSpendTableColumns[row].value = !this.sourceableSpendTableColumns[row].value;
    this.sourceableSpendTableColumns = [...this.sourceableSpendTableColumns];
  }

  toggleCostReductionTable(row: number) {
    this.costReductionTableColumns[row].value = !this.costReductionTableColumns[row].value;
    this.costReductionTableColumns = [...this.costReductionTableColumns];
  }


  toggleCostAvoidanceTable(row: number) {
    this.costAvoidanceTableColumns[row].value = !this.costAvoidanceTableColumns[row].value;
    this.costAvoidanceTableColumns = [...this.costAvoidanceTableColumns];
  }

  

}
