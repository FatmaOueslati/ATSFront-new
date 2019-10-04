import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  id:string;
  product : any;
  ngOnInit() {
    this.id = ""+this.route.snapshot.params['id'];
    console.log(this.id);
    // this.productService.getProduct(this.id).subscribe(result => {
    //   this.product = result;
    // });
  }

}
