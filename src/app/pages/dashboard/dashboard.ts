import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { getTemplateProvider } from '../../shared/providers';

@Component({
  templateUrl: './dashboard.html',
  standalone: true,
  imports: [],
  providers: [
    // getTemplateProvider(),
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardPageComponent {}
