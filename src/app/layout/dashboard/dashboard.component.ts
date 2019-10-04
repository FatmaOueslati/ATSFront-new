import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
    displayedColumns: string[] = ['productName', 'color', 'productMaterial', 'createdAt', 'price'];
    dataSource = new MatTableDataSource(this.productService.data);//// to be deleted
    // dataSource = new MatTableDataSource();
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    animal: string;
    name: string;
    constructor(public dialog: MatDialog, private productService: ProductService) {}

    ngOnInit() {
      // this.productService.getProducts(3).subscribe((result: any[]) =>{
      //   console.log(result);
      //   this.dataSource = new MatTableDataSource(result);
      // })
    }
}