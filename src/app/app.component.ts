import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'books';

  constructor() {
    const config = {
      apiKey: 'AIzaSyBpDX_jPBFpt514efaTdF9_PXCf09YgMBk',
      authDomain: 'voiture-151319.firebaseapp.com',
      databaseURL: 'https://voiture-151319.firebaseio.com',
      projectId: 'voiture-151319',
      storageBucket: 'voiture-151319.appspot.com',
      messagingSenderId: '872323651796',
      appId: '1:872323651796:web:43d98af93635d241a3c341',
      measurementId: 'G-E7W0K9ZHMK'
    };
    firebase.initializeApp(config);
  }


}

