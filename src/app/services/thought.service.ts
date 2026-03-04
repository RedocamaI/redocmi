import { Injectable } from '@angular/core';
import { Thought } from '../shared/types';

@Injectable({ providedIn: 'root' })
export class ThoughtService {
  private thoughts: Thought[] = [
    { id: '1', title: 'Thoughts on building Redocmi', date: '2/09/2025', excerpt: 'Starting a minimal blog with Angular.' },
    { id: '2', title: 'Front-end first', date: '2/08/2025', excerpt: 'Design the UI, then wire the backend.' },
    { id: '3', title: 'Compact design', date: '2/07/2025', excerpt: 'Less is more for a personal space.' },
    { id: '4', title: 'Fourth thought', date: '2/06/2025', excerpt: 'Another idea to try.' },
    { id: '5', title: 'Fifth thought', date: '2/05/2025', excerpt: 'Another idea to try.' },
    { id: '6', title: 'Sixth thought', date: '2/04/2025', excerpt: 'Another idea to try.' },
    { id: '7', title: 'Seventh thought', date: '2/03/2025', excerpt: 'Another idea to try.' },
    { id: '8', title: 'Eighth thought', date: '2/02/2025', excerpt: 'Another idea to try.' },
    { id: '9', title: 'Ninth thought', date: '2/01/2025', excerpt: 'Another idea to try.' },
    { id: '10', title: 'Tenth thought', date: '1/31/2025', excerpt: 'Another idea to try.' },
  ];

  getRecent(count: number): Thought[] {
    return this.thoughts.slice(0, count);
  }

  getAll(): Thought[] {
    return [...this.thoughts];
  }

  getById(id: string): Thought | undefined {
    return this.thoughts.find((t) => t.id === id);
  }
}
