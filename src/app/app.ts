import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './layout/header';
import { SidebarComponent } from './layout/sidebar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly router = inject(Router);

  protected title = 'web-ai-docs';

  protected isAuthRoute(): boolean {
    return this.router.url.startsWith('/auth');
  }
}
