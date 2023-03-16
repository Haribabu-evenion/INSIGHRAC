import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import MockData from '../../../assets/mock_data/get_table_data_mock.json';

@Component({
  selector: 'app-saving-value',
  templateUrl: './saving-value.component.html',
  styleUrls: ['./saving-value.component.css']
})
export class SavingValueComponent implements OnInit {
  savingValue: any={};
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @Input() filterOption: any[] = [];

  tableData: any = {};
  constructor() { }

  ngOnInit(): void {
    this.savingValue = MockData.saving_value;
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
    const tempSourceData = JSON.parse(JSON.stringify(MockData.saving_value));
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
