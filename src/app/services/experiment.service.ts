import { Injectable } from '@angular/core';
import { Experiment } from '../shared/types';

@Injectable({ providedIn: 'root' })
export class ExperimentService {
  private experiments: Experiment[] = [
    { id: '1', title: 'First experiment', description: 'Placeholder for a future experiment.', date: '2/09/2025' },
    { id: '2', title: 'Second experiment', description: 'Another idea to try.', date: '2/08/2025' },
    { id: '3', title: 'Third experiment', description: 'Another idea to try.', date: '2/07/2025' },
    { id: '4', title: 'Fourth experiment', description: 'Another idea to try.', date: '2/06/2025' },
    { id: '5', title: 'Fifth experiment', description: 'Another idea to try.', date: '2/05/2025' },
    { id: '6', title: 'Sixth experiment', description: 'Another idea to try.', date: '2/04/2025' },
    { id: '7', title: 'Seventh experiment', description: 'Another idea to try.', date: '2/03/2025' },
    { id: '8', title: 'Eighth experiment', description: 'Another idea to try.', date: '2/02/2025' },
    { id: '9', title: 'Ninth experiment', description: 'Another idea to try.', date: '2/01/2025' },
    { id: '10', title: 'Tenth experiment', description: 'Another idea to try.', date: '1/31/2025' },
  ];

  getAll(): Experiment[] {
    return [...this.experiments];
  }

  getRecent(count: number): Experiment[] {
    return this.experiments.slice(0, count);
  }

  getById(id: string): Experiment | undefined {
    return this.experiments.find((e) => e.id === id);
  }
}
