import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { ReviewsService, Review } from '../../services/reviews';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews-component.html',
  styleUrls: ['./reviews-component.css']
})
export class ReviewsComponent {
  reviews$: ReturnType<ReviewsService['getReviews']>;
  user$: typeof this.auth.user$;

  comment = '';
  rating = 5;
  stars = [1, 2, 3, 4, 5];

  constructor(
    private reviewsService: ReviewsService,
    private auth: AuthService
  ) {
    this.reviews$ = this.reviewsService.getReviews();
    this.user$ = this.auth.user$;
  }

  async sendReview() {
    try {
      await lastValueFrom(this.reviewsService.addReview(this.comment, this.rating));
      this.comment = '';
      this.rating = 5;
    } catch (err: any) {
      console.error('Error al enviar reseña:', err);
      alert(err?.message || 'Error al enviar reseña — revisa la consola');
    }
  }

  async markUseful(review: Review) {
    try {
      if (!review.id) return;
      await lastValueFrom(this.reviewsService.markAsUseful(review.id));
    } catch (err: any) {
      console.error('Error al marcar útil:', err);
      alert(err?.message || 'Error al marcar útil');
    }
  }
}
