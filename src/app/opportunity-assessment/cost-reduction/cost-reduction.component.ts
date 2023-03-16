import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import MockData from '../../../assets/mock_data/get_table_data_mock.json';

@Component({
  selector: 'app-cost-reduction',
  templateUrl: './cost-reduction.component.html',
  styleUrls: ['./cost-reduction.component.css']
})
export class CostReductionComponent implements OnInit {
  costReduction: any={};
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @Input() filterOption: any[] = [];

  tableData: any = {};
  constructor() { }

  ngOnInit(): void {
    this.costReduction = MockData.cost_reduction;
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
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes['filterOption'].currentValue) {
      // re validate the table dta
      this.filterData();
    }
  }

  filterData(): void {
    const tempSourceData = JSON.parse(JSON.stringify(MockData.cost_reduction));
    const newData = {
      columns: [] as any,
      data: []
    };

    this.filterOption.forEach((columnOption, index) => {
      if (columnOption?.value === true) {
        newData.columns.push(columnOption.name);
      }
    });

    const requirdColumnIndexs = this.filterOption.map((value, index) => value.value ? index : -1 ).filter(e => e != -1);
    newData.data = tempSourceData.data.map((rowData: any[]) => {
      return requirdColumnIndexs.map(index => rowData[index]);
    });
    this.tableData = newData;
  }

}
