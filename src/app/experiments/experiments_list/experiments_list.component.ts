import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperimentService } from '../../services/experiment.service';
import { getExperimentDetailsUrl } from '../../shared/util';

@Component({
  selector: 'app-experiments-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './experiments_list.component.html',
  styleUrl: './experiments_list.component.scss',
})
export class ExperimentsListComponent {
  private experimentService = inject(ExperimentService);
  protected readonly experiments = this.experimentService.getAll();
  protected getExperimentDetailsUrl = getExperimentDetailsUrl;
}
