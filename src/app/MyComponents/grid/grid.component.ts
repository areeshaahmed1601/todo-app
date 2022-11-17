import { Component, OnInit, ViewChild, OnChanges, Input } from '@angular/core';
import { data } from './data.component';

@Component({
  selector: 'grid-component',
  template: `
    <ejs-grid
      #grid
      [dataSource]="data"
      [height]="315"
      allowFiltering="true"
      [filterSettings]="filterSettings"
    >
      <e-columns>
        <e-column
          field="OrderID"
          headerText="Order ID"
          width="120"
          textAlign="Right"
        ></e-column>
        <e-column field="ShipCountry" headerText="ShipCountry" width="150">
          <ng-template #filterItemTemplate let-data
            ><div>{{ getval() }}</div></ng-template
          >
        </e-column>
        <e-column
          field="OrderDate"
          headerText="Order Date"
          width="130"
          format="yMd"
          textAlign="Right"
        ></e-column>
      </e-columns>
    </ejs-grid>
  `,
})
export class GridComponent implements OnInit {
  public data: Object[];
  public filterSettings: any;
  public getval(): any {
    return 'uhgyg';
  }
  public editSettings;

  ngOnInit(): void {
    this.data = data.slice(0, 1);
    this.filterSettings = { type: 'Excel' };
    this.editSettings = { allowEditing: true };
  }
}
//        <ng-template #filterItemTemplate let-data ><div>{{getval(data)}}</div></ng-template>
