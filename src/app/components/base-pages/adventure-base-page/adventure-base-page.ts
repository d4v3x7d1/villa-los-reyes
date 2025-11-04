import { Position } from './../../shared/interfaces/app-interfaces';
import { Component, input } from '@angular/core';
import { MainHeaderSection } from "../../sections/main-header-section/main-header-section";
import { AdventurekGallerySection } from "../../sections/adventure-gallery-section/adventure-gallery-section";
import { DiscoverPackageDefaultOne } from "../../../presets/discover-package-default-one/discover-package-default-one";
import { DiscoverServicesDefault } from "../../../presets/discover-services-default/discover-services-default";

@Component({
  selector: 'adventure-base-page',
  imports: [MainHeaderSection, AdventurekGallerySection, DiscoverPackageDefaultOne, DiscoverServicesDefault],
  templateUrl: './adventure-base-page.html',
  styleUrl: './adventure-base-page.css'
})
export class AdventureBasePage {
  header = input.required<{
    head: { title: string; description: string };
    image: { src: string; alt: string };
    objectPosition: Position;
  }>();

items = input.required<{ src: string; label: string; path: string }[]>();
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDlMsDMuhRne9-X7DXvWvkmJHIuq4FBavc",
//   authDomain: "villa-los-reyes.firebaseapp.com",
//   projectId: "villa-los-reyes",
//   storageBucket: "villa-los-reyes.firebasestorage.app",
//   messagingSenderId: "293261168347",
//   appId: "1:293261168347:web:2b276d3f17830b38ee86fe"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /reviews/{id} {
//       allow read: if true;
//       allow create: if request.auth != null
//                     && request.resource.data.rating >= 1
//                     && request.resource.data.rating <= 5
//                     && request.resource.data.comment.size() <= 500;
//       allow update, delete: if request.auth != null && request.auth.uid == resource.data.uid;
//     }
//   }
// }

// // app.config.ts (ejemplo)
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// export const appConfig = {
//   providers: [
//     provideFirebaseApp(() => initializeApp(firebaseConfig)),
//     provideAuth(() => getAuth()),
//     provideFirestore(() => getFirestore())
//   ]
// };


// import { Injectable } from '@angular/core';
// import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInAnonymously } from '@angular/fire/auth';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   constructor(private auth: Auth) {}

//   signUp(email: string, password: string) {
//     return createUserWithEmailAndPassword(this.auth, email, password);
//   }

//   signIn(email: string, password: string) {
//     return signInWithEmailAndPassword(this.auth, email, password);
//   }

//   signInAnonymous() {
//     return signInAnonymously(this.auth);
//   }

//   logout() {
//     return signOut(this.auth);
//   }
// }

// <!-- registro simple -->
// <form (ngSubmit)="onSignUp()">
//   <input [(ngModel)]="email" name="email" />
//   <input [(ngModel)]="password" name="password" type="password" />
//   <button type="submit">Registrar</button>
// </form>

// // en tu componente
// constructor(private authService: AuthService) {}

// async onSignUp() {
//   await this.authService.signUp(this.email, this.password);
//   // puedes enviar email verification si quieres
// }


// import { addDoc, collection } from '@angular/fire/firestore';
// import { Auth } from '@angular/fire/auth';

// constructor(private firestore: Firestore, private auth: Auth) {}

// async addReview(data: {rating:number, comment:string, name?:string}) {
//   const uid = this.auth.currentUser?.uid || null;
//   const doc = { ...data, uid, createdAt: new Date() };
//   return addDoc(collection(this.firestore, 'reviews'), doc);
// }
