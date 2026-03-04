import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EditModeService } from '../services/edit-mode.service';

@Component({
  selector: 'app-unlock',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './unlock.component.html',
  styleUrl: './unlock.component.scss',
})
export class UnlockComponent {
  private readonly editMode = inject(EditModeService);
  private readonly router = inject(Router);

  protected password = signal('');
  protected error = signal('');

  protected onPasswordInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.password.set(target?.value ?? '');
  }

  protected onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.error.set('');

    const ok = this.editMode.unlock(this.password());
    if (!ok) {
      this.error.set('Incorrect password.');
      return;
    }

    this.router.navigateByUrl('/write');
  }
}

