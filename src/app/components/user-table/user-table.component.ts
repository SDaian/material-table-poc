import { Component, OnInit } from '@angular/core';

import { DataService, User } from '../../services/data.service';
import { TableColumn } from '../table/table.component';
import { Observable, map } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styles: ['.container { padding: 1rem; }'],
})
export class UserTableComponent {
  displayedColumns: string[] = ['ID', 'body', 'Name', 'Email'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  constructor(private dataService: DataService) {}

  users$ = this.dataService.getData().pipe(
    map((data) => {
      this.dataSource.data = data;
      return this.dataSource;
    })
  );
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
}
