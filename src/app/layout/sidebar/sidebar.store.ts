import { Injectable, computed, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarStore {
  private readonly _isCollapsed = signal<boolean>(true);

  readonly isCollapsed = this._isCollapsed.asReadonly();

  toggle(value?: boolean): void {
    if (value !== undefined) {
      this._isCollapsed.set(value);
      return;
    }

    this._isCollapsed.update((current) => !current);
  }
}
