import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { TableColumn } from '../table/table.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
})
export class UserTableComponent implements OnInit {
  constructor(private dataService: DataService) {}

  users$ = this.dataService.getData();
  userColumns: TableColumn[] = [
    {
      name: 'ID',
      dataKey: 'id',
    },
    {
      name: 'Name',
      dataKey: 'name',
    },
    {
      name: 'Email',
      dataKey: 'email',
    },
  ];

  ngOnInit(): void {}
}
