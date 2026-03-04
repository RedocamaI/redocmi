import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ExperimentService } from '../../services/experiment.service';
import { APP_NAV_ROUTES } from '../../shared/constants';

@Component({
  selector: 'app-experiment-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './experiment_details.component.html',
  styleUrl: './experiment_details.component.scss',
})
export class ExperimentDetailsComponent {
  private readonly experimentService = inject(ExperimentService);
  private readonly route = inject(ActivatedRoute);

  protected readonly experiment = computed(() => this.experimentService.getById(
    this.route.snapshot.paramMap.get('id') ?? '',
  ));

  protected readonly experimentsLink = APP_NAV_ROUTES.experiments;

  protected readonly experimentTitle = computed(() => this.experiment()?.title ?? '');

  protected readonly experimentDate = computed(() => this.experiment()?.date ?? '');

  protected readonly experimentDescription = computed(() => this.experiment()?.description ?? '');
}
