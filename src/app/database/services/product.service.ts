import { Injectable } from '@angular/core';

// FUNÇÕES DE DATABASE ( PUSH, READ, UPDATE, REMOVE )

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// Modelo
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }
    
    getProducts(){
      return this.productList = this.firebase.list('products');
    }

    insertProduct(product: Product){
      this.productList.push({
        name: product.name,
        category: product.category,
        price: product.price,
        serie: product.serie
      });
    }

    updateProduct(product: Product){
      this.productList.update(product.$key, {
        name: product.name,
        category: product.category,
        price: product.price,
        serie: product.serie
      });
    }

    deleteProduct($key: string){
      this.productList.remove($key);
    }


}// Fim do Service
