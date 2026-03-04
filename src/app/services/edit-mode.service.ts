import { Injectable, computed, signal } from '@angular/core';

const STORAGE_KEY = 'redocmi-edit-mode';
const EDIT_MODE_PASSWORD = 'redocmi@712001';

@Injectable({ providedIn: 'root' })
export class EditModeService {
  private editModeSignal = signal<boolean>(this.getStoredState());

  readonly isEditMode = this.editModeSignal.asReadonly();
  readonly isEnabled = computed(() => this.editModeSignal());

  unlock(password: string): boolean {
    if (password !== EDIT_MODE_PASSWORD) {
      return false;
    }

    this.editModeSignal.set(true);
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
    return true;
  }

  lock(): void {
    this.editModeSignal.set(false);
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  private getStoredState(): boolean {
    if (typeof sessionStorage === 'undefined') return false;
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  }
}
