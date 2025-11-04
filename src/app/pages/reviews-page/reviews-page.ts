import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth';
import { Review, ReviewsService } from '../../services/reviews';

@Component({
  selector: 'reviews-page',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './reviews-page.html',
  styleUrls: ['./reviews-page.css'],
})
export class ReviewsPage {
  private readonly auth = inject(AuthService);
  private readonly reviewsService = inject(ReviewsService);

  // Signals
  readonly user = toSignal(this.auth.user$, { initialValue: null });
  readonly reviews = toSignal(this.reviewsService.reviews$, { initialValue: [] as Review[] });

  // Form
  comment = '';
  rating = 5;
  stars = [1, 2, 3, 4, 5];

  // Pagination
  readonly page = signal(1);
  readonly pageSize = 5;

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.reviews().length / this.pageSize)));

  readonly paginatedReviews = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.reviews().slice(start, start + this.pageSize);
  });

  async sendReview() {
    if (!this.comment.trim()) {
      alert('Por favor escribe un comentario.');
      return;
    }
    try {
      await this.reviewsService.addReview(this.comment, this.rating);
      this.comment = '';
      this.rating = 5;
      // opcional: resetear a primera página si quieres
      // this.page.set(1);
    } catch (err: any) {
      console.error('Error al enviar reseña:', err);
      alert(err?.message || 'Error al enviar reseña.');
    }
  }

  async markUseful(review: Review) {
    try {
      await this.reviewsService.markAsUseful(review.id);
    } catch (err: any) {
      console.error('Error al marcar útil:', err);
      alert(err?.message || 'Error al marcar útil.');
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
