import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EditModeService } from '../services/edit-mode.service';

export const editModeGuard: CanActivateFn = () => {
  const editMode = inject(EditModeService);
  const router = inject(Router);

  if (editMode.isEnabled()) {
    return true;
  }

  return router.parseUrl('/unlock');
};

