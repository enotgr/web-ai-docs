import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SidebarStore } from './sidebar.store';
import { SIDEBAR_TEMPLATES } from '../../shared/tokens';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  standalone: true,
  imports: [NgClass, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private readonly sidebarStore = inject(SidebarStore);
  readonly templates =
    inject(SIDEBAR_TEMPLATES, { optional: true }) ?? signal([]);

  readonly isCollapsed = this.sidebarStore.isCollapsed;

  toggleSidebar(): void {
    this.sidebarStore.toggle();
  }
}
