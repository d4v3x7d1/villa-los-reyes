import {
  Injectable,
  inject,
  EnvironmentInjector,
  runInInjectionContext,
  signal,
} from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  runTransaction,
  query,
  orderBy,
} from '@angular/fire/firestore';
import { map, shareReplay } from 'rxjs';
import { AuthService } from './auth';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userEmail?: string;
  userPhoto: string;
  rating: number;
  comment: string;
  usefulCount: number;
  usefulBy: string[];
  createdAt: Date | null;
}

@Injectable({ providedIn: 'root' })
export class ReviewsService {
  private firestore = inject(Firestore);
  private auth = inject(AuthService);
  private env = inject(EnvironmentInjector);
  private ref = collection(this.firestore, 'reviews');

  /** 🔹 Stream público (ahora no es privado) */
  readonly reviews$ = runInInjectionContext(this.env, () =>
    collectionData(query(this.ref, orderBy('createdAt', 'desc')), { idField: 'id' }).pipe(
      map((docs: any[]) =>
        docs.map(
          (d) =>
            ({
              id: d.id,
              userId: d.userId,
              userName: d.userName,
              userEmail: d.userEmail || '',
              userPhoto: d.userPhoto || '',
              rating: Number(d.rating) || 0,
              comment: d.comment || '',
              usefulBy: Array.isArray(d.usefulBy) ? d.usefulBy : [],
              usefulCount: Array.isArray(d.usefulBy)
                ? d.usefulBy.length
                : Number(d.usefulCount) || 0,
              createdAt:
                d.createdAt?.toDate?.() ??
                (typeof d.createdAt === 'string' ? new Date(d.createdAt) : null),
            }) as Review
        )
      ),
      shareReplay(1)
    )
  );

  async addReview(comment: string, rating: number) {
    const user = this.auth.getCurrentUser();
    if (!user) throw new Error('Debes iniciar sesión para opinar.');

    const newReview = {
      userId: user.uid,
      userName: user.displayName || 'Usuario',
      userEmail: user.email || '',
      userPhoto: user.photoURL || '',
      rating,
      comment,
      usefulBy: [],
      usefulCount: 0,
      createdAt: new Date(),
    };

    await runInInjectionContext(this.env, () => addDoc(this.ref, newReview));
  }


  async markAsUseful(reviewId: string, markUseful: boolean) {
  const user = this.auth.getCurrentUser();
  if (!user) throw new Error('Inicia sesión primero.');

  const ref = doc(this.firestore, `reviews/${reviewId}`);
  await runInInjectionContext(this.env, () =>
    runTransaction(this.firestore, async (tx) => {
      const snap = await tx.get(ref);
      if (!snap.exists()) throw new Error('Reseña no encontrada.');

      const data = snap.data() as Review;
      const list = Array.isArray(data.usefulBy) ? data.usefulBy : [];

      let newList = list;

      if (markUseful) {
        // agregar usuario solo si no estaba
        if (!list.includes(user.uid)) {
          newList = [...list, user.uid];
        }
      } else {
        // remover usuario solo si estaba
        if (list.includes(user.uid)) {
          newList = list.filter((id) => id !== user.uid);
        }
      }

      // actualizar si hubo cambios
      if (newList !== list) {
        tx.update(ref, { usefulBy: newList, usefulCount: newList.length });
      }
    })
  );
}

}
