import { Component, computed, signal, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth';
import { Review, ReviewsService } from '../../services/reviews';
import { MainHeaderSection } from "../../components/sections/main-header-section/main-header-section";

@Component({
  selector: 'reviews-new-page',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, MainHeaderSection],
  templateUrl: './reviews-new-page.html',
  styleUrls: ['./reviews-new-page.css'],
})
export class ReviewsNewPage {

  header = {
    title: 'Reseñas y comentarios',
    description: 'Lee las reseñas de nuestros huéspedes y descubre por qué Villa Los Reyes es el lugar perfecto para tu estancia. ¡Tu opinión también cuenta!.',
  };

  private readonly auth = inject(AuthService);
  private readonly reviewsService = inject(ReviewsService);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly user = toSignal(this.auth.user$, { initialValue: null });
  readonly reviews = signal<Review[]>([]);

  comment = '';
  rating = 5;
  stars = [1, 2, 3, 4, 5];

  page = signal(1);
  readonly pageSize = 5;

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.reviews().length / this.pageSize))
  );

  readonly paginatedReviews = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.reviews().slice(start, start + this.pageSize);
  });

  constructor() {
    this.reviewsService.reviews$.subscribe((items) => {
      this.reviews.update(() => items);
      this.cdr.detectChanges(); // Fuerza actualización inmediata
    });
  }

  async sendReview() {
    if (!this.comment.trim()) {
      alert('Por favor escribe un comentario.');
      return;
    }
    try {
      await this.reviewsService.addReview(this.comment, this.rating);
      this.comment = '';
      this.rating = 5;
    } catch (e: any) {
      console.error('Error al enviar reseña:', e);
      alert(e.message || 'Error al enviar reseña.');
    }
  }

  async markUseful(review: Review,markUseful: boolean) {
    try {
      await this.reviewsService.markAsUseful(review.id,markUseful);
    } catch (e: any) {
      console.error('Error al marcar útil:', e);
      alert(e.message || 'Error al marcar útil.');
    }
  }

  changePage(delta: number) {
    const newPage = this.page() + delta;
    if (newPage >= 1 && newPage <= this.totalPages()) this.page.set(newPage);
  }

  get commentLength() {
    return this.comment.length;
  }
}
