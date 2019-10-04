import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }
  public data: any[] = [
    {id: '1', productName: 'Awesome Rubber Sausages', color: 'orange', productMaterial: 'Wooden',createdAt: '2019-10-03T21:36:33.206Z' ,price: '649.00'},
    {id: '2', productName: 'Rustic Soft Cheese', color: 'sky blue', productMaterial: 'Cotton',createdAt: '2019-06-20T21:36:33.206Z' ,price: '426.00'},
    {id: '3', productName: 'Handcrafted Granite Tuna', color: 'mint green', productMaterial: 'Plastic',createdAt: '2018-12-09T21:36:33.206Z' ,price: '583.00'},
    {id: '4', productName: 'Awesome Frozen Pants', color: 'teal', productMaterial: 'Cotton',createdAt: '2017-11-05T22:35:36.373Z' ,price: '67.00'},
    {id: '5', productName: 'Sleek Metal Computer', color: 'red', productMaterial: 'Cotton',createdAt: '2018-10-01T22:35:36.374Z' ,price: '696.00'}
  ];
  getProducts(numberPages: number){
    return this.httpClient.get('http://internal.ats-digital.com:30000/products?size='+numberPages);
  }
  
  getProduct(id: string){
    return this.httpClient.get('http://internal.ats-digital.com:30000/products/'+id);
  }
}
