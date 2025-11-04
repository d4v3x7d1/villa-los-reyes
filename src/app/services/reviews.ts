import { Injectable, inject, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  runTransaction,
  query,
  orderBy,
} from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  rating: number;
  comment: string;
  usefulCount: number;
  usefulBy: string[];
  createdAt: Date | null;
}

@Injectable({ providedIn: 'root' })
export class ReviewsService {
  private readonly firestore = inject(Firestore);
  private readonly auth = inject(AuthService);
  private readonly env = inject(EnvironmentInjector);

  private readonly ref = collection(this.firestore, 'reviews');

  /**
   * Observable público de reseñas (ordenadas por createdAt desc).
   * Mantenlo público para que los componentes puedan convertirlo a Signal.
   */
  public readonly reviews$: Observable<Review[]> = runInInjectionContext(this.env, () =>
    collectionData(query(this.ref, orderBy('createdAt', 'desc')), { idField: 'id' }).pipe(
      map((docs: any[]) =>
        (docs || []).map((d) => ({
          id: d.id ?? '',
          userId: d.userId,
          userName: d.userName,
          userPhoto: d.userPhoto || '',
          rating: Number(d.rating) || 0,
          comment: d.comment || '',
          usefulBy: Array.isArray(d.usefulBy) ? d.usefulBy : [],
          usefulCount: Array.isArray(d.usefulBy) ? d.usefulBy.length : Number(d.usefulCount) || 0,
          createdAt:
            d.createdAt?.toDate?.() ??
            (typeof d.createdAt === 'string' ? new Date(d.createdAt) : null),
        } as Review))
      )
    )
  );

  /** Añadir una reseña (requiere usuario logueado) */
  async addReview(comment: string, rating: number) {
    const user = this.auth.getCurrentUser();
    if (!user) throw new Error('Debes iniciar sesión para dejar una reseña.');

    const newReview = {
      userId: user.uid,
      userName: user.displayName || 'Usuario',
      userPhoto: user.photoURL || '',
      rating,
      comment,
      usefulBy: [],
      usefulCount: 0,
      createdAt: new Date(),
    };

    await runInInjectionContext(this.env, () => addDoc(this.ref, newReview));
  }

  /** Marcar / desmarcar como útil (transacción) */
  async markAsUseful(reviewId: string) {
    const user = this.auth.getCurrentUser();
    if (!user) throw new Error('Debes iniciar sesión para marcar como útil.');

    const reviewRef = doc(this.firestore, `reviews/${reviewId}`);
    await runInInjectionContext(this.env, () =>
      runTransaction(this.firestore, async (tx) => {
        const snap = await tx.get(reviewRef);
        if (!snap.exists()) throw new Error('Reseña no encontrada.');
        const data = snap.data() as any;
        const usefulBy: string[] = Array.isArray(data.usefulBy) ? data.usefulBy : [];
        const already = usefulBy.includes(user.uid);
        const newList = already ? usefulBy.filter((id) => id !== user.uid) : [...usefulBy, user.uid];
        tx.update(reviewRef, { usefulBy: newList, usefulCount: newList.length });
      })
    );
  }
}
