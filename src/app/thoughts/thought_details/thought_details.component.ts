import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ThoughtService } from '../../services/thought.service';
import { APP_NAV_ROUTES } from '../../shared/constants';

@Component({
  selector: 'app-thought-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './thought_details.component.html',
  styleUrl: './thought_details.component.scss',
})
export class ThoughtDetailsComponent {
  private readonly thoughtService = inject(ThoughtService);
  private readonly route = inject(ActivatedRoute);

  protected readonly thought = computed(() => this.thoughtService.getById(
    this.route.snapshot.paramMap.get('id') ?? '',
  ));

  protected readonly thoughtsLink = APP_NAV_ROUTES.thoughts;

  protected readonly thoughtTitle = computed(() => this.thought()?.title ?? '');

  protected readonly thoughtDate = computed(() => this.thought()?.date ?? '');

  protected readonly thoughtExcerpt = computed(() => this.thought()?.excerpt ?? '');

  protected readonly thoughtBody = computed(() => this.thought()?.body ?? '');
}
