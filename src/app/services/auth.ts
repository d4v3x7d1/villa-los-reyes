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
  private readonly auth = inject(Auth);

  /** Observable reactivo del usuario */
  readonly user$: Observable<User | null> = authState(this.auth);

  /** Inicia sesión con Google (solo sesión en pestaña) */
  loginWithGoogle(): Observable<User> {
    const provider = new GoogleAuthProvider();
    const login = setPersistence(this.auth, browserSessionPersistence)
      .then(() => signInWithPopup(this.auth, provider))
      .then((res) => res.user);
    return from(login);
  }

  /** Cerrar sesión */
  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  /** Obtener usuario actual (sin observable) */
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
