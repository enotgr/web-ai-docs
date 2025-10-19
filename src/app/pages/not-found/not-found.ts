import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: './not-found.html',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NotFoundPageComponent {}
