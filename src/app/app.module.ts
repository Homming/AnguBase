import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

//Componentes
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { StorageComponent } from './storage/storage.component'; 
//Database
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component'; 
//Service
import { ProductService } from './database/services/product.service';

//Módulos
import { AngularFireAuthModule } from 'angularfire2/auth';  //AUTH
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage'; //STORAGE
import { AngularFireDatabaseModule } from 'angularfire2/database'; // DATABASE

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // configs do firebase
    AngularFireAuthModule, // recursos de auth
    AngularFireStorageModule, // recursos de storage
    AngularFireDatabaseModule // recursos de database
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
