import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

//Componentes
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

//Módulos Firebase
import { AngularFireAuthModule } from 'angularfire2/auth';  //AUTH
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage'; //STORAGE
import { AngularFireDatabaseModule } from 'angularfire2/database'; // DATABASE

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
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
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
