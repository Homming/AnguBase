import { Component, OnInit } from '@angular/core';

// Modelo
import { Product } from '../../../database/model/product';

// Service
import { ProductService } from '../../../database/services/product.service';
import { element } from 'protractor';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    return this.productService.getProducts().snapshotChanges().subscribe(item => {
      this.productList = [];

      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productList.push(x as Product);
      });
    });
  }

  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete($key: string) {
    if(confirm('Você tem certeza que deseja deletar ?')) {
      this.productService.deleteProduct($key);
    }
  }

}
