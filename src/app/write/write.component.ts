import { Component, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MarkdownPipe } from '../shared/pipes/markdown';

@Component({
  selector: 'app-write',
  standalone: true,
  imports: [MarkdownPipe, AsyncPipe],
  templateUrl: './write.component.html',
  styleUrl: './write.component.scss',
})
export class WriteComponent {
  protected content = signal<string>('# New note\n\nStart writing in markdown...');

  protected onContentInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.content.set(target?.value ?? '');
  }
}

