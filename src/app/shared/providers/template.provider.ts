import { EnvironmentProviders, inject, makeEnvironmentProviders } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { SIDEBAR_TEMPLATES } from '../tokens';
import { ApiService } from '../services/api.service';
import type { SidebarItem } from '../interfaces';

export function provideSidebarTemplates(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: SIDEBAR_TEMPLATES,
      useFactory: () => {
        const api = inject(ApiService);

        const templates$ = api.getTemplates().pipe(
          map((items): SidebarItem[] =>
            items.map((item) => ({
              id: item.id,
              title: item.name,
              url: item.url,
            }))
          ),
          catchError(() => of<SidebarItem[]>([]))
        );

        return toSignal(templates$, { initialValue: [] });
      },
    },
  ]);
}
