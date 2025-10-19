import { InjectionToken, type Signal } from '@angular/core';

import { SidebarItem } from '../interfaces';

export const SIDEBAR_TEMPLATES = new InjectionToken<Signal<SidebarItem[]>>(
  'SIDEBAR_TEMPLATES_TOKEN'
);
