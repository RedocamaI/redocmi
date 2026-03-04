import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtService } from '../../services/thought.service';
import { getThoughtDetailsUrl } from '../../shared/util';

@Component({
  selector: 'app-thoughts-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './thoughts_list.component.html',
  styleUrl: './thoughts_list.component.scss',
})
export class ThoughtsListComponent {
  private thoughtService = inject(ThoughtService);
  protected readonly thoughts = this.thoughtService.getAll();
  protected getThoughtDetailsUrl = getThoughtDetailsUrl;
}
