import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { EditModeService } from '../services/edit-mode.service';
import { APP_NAV_ROUTES } from '../shared/constants';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  protected readonly routes = APP_NAV_ROUTES;
  protected readonly year = computed(() => new Date().getFullYear());
  protected readonly theme = inject(ThemeService);
  protected readonly editMode = inject(EditModeService);

  protected readonly themeToggleLabel = computed(() =>
    this.theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode',
  );

  protected readonly themeToggleTitle = computed(() =>
    this.theme.isDark() ? 'Light mode' : 'Dark mode',
  );
}
