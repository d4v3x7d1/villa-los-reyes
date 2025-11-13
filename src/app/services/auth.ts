import { Injectable, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  authState,
  setPersistence,
  browserSessionPersistence,
  User,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  readonly user$: Observable<User | null> = authState(this.auth);

  loginWithGoogle(): Observable<User> {
    const provider = new GoogleAuthProvider();
    const login = setPersistence(this.auth, browserSessionPersistence)
      .then(() => signInWithPopup(this.auth, provider))
      .then((res) => res.user);
    return from(login);
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
