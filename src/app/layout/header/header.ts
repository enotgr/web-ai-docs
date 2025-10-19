import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SidebarStore } from '../sidebar/sidebar.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly sidebarStore = inject(SidebarStore);

  readonly isCollapsed = this.sidebarStore.isCollapsed;

  toggleSidebar(): void {
    this.sidebarStore.toggle();
  }
}
