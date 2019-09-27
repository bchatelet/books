import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import core firebase client (required)
import firebase from '@firebase/app';
// import Firebase Authentication (optional)
import '@firebase/auth';
// import Firebase Realtime Database (optional)
import '@firebase/database';
// import Cloud Firestore (optional)
import '@firebase/firestore';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true);
            } else {
              this.router.navigate(['/auth', 'signin']);
              resolve(false);
            }
          }
        );
      }
    );
  }
}
