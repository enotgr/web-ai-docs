import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DocumentItem } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  getTemplates(): Observable<DocumentItem[]> {
    return of([{ id: '1', name: 'MyDocument', type: 'type', url: '/' }]);
  }
}
