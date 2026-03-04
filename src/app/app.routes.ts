import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ThoughtsListComponent} from './thoughts/thoughts_list/thoughts_list.component';
import {ThoughtDetailsComponent} from './thoughts/thought_details/thought_details.component';
import {ExperimentsListComponent} from './experiments/experiments_list/experiments_list.component';
import {ExperimentDetailsComponent} from './experiments/experiment_details/experiment_details.component';
import {UnlockComponent} from './unlock/unlock.component';
import {WriteComponent} from './write/write.component';
import {editModeGuard} from './guards/edit-mode.guard';

export const APP_ROUTES: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    component: HomeComponent 
  },
  { 
    path: 'thoughts', 
    component: ThoughtsListComponent 
  },
  { 
    path: 'thoughts/:id', 
    component: ThoughtDetailsComponent 
  },
  { 
    path: 'experiments', 
    component: ExperimentsListComponent 
  },
  { 
    path: 'experiments/:id', 
    component: ExperimentDetailsComponent 
  },
  { 
    path: 'write', 
    component: WriteComponent,
    canActivate: [editModeGuard],
  },
  { 
    path: 'unlock', 
    component: UnlockComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
