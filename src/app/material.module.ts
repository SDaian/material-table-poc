import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';

const MATERIAL_MODULES: NgModule['imports'] & NgModule['exports'] = [
  MatTableModule,
  MatIconModule,
  MatSortModule,
  MatFormFieldModule,
  MatPaginatorModule,
  CdkTableModule
];
@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {}
