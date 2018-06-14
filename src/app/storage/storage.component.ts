import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  
  constructor(private afStorage: AngularFireStorage) { }
  upload(event) {
    const id = Math.random().toString(36).substring(2); //Chave Valor
    this.ref = this.afStorage.ref(id); // Referencia
    this.task = this.ref.put(event.target.files[0]); // AngularFireUploadTask (Put)
    this.uploadProgress = this.task.percentageChanges(); // Progresso do Upload
  }

}
