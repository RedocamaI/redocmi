import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtService } from '../services/thought.service';
import { ExperimentService } from '../services/experiment.service';
import { getThoughtDetailsUrl, getExperimentDetailsUrl } from '../shared/util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private thoughtService = inject(ThoughtService);
  private experimentService = inject(ExperimentService);

  protected readonly recentThoughts = computed(() => this.thoughtService.getRecent(3));
  protected readonly experiments = computed(() => this.experimentService.getRecent(3));

  protected getThoughtDetails = getThoughtDetailsUrl;
  protected getExperimentDetails = getExperimentDetailsUrl;
}
