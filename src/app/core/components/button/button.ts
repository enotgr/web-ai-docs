import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input<boolean>(false);
  readonly wide = input<boolean>(false);
  readonly variant = input<'primary' | 'secondary' | 'tertiary'>('primary');
  readonly size = input<'sm' | 'md' | 'lg'>('md');

  get variantClass() {
    switch (this.variant()) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300';
      case 'secondary':
        return 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300';
      case 'tertiary':
        return 'bg-transparent text-blue-600 hover:bg-blue-50 disabled:text-blue-300';
      default:
        return '';
    }
  }

  get sizeClass() {
    console.log(this.size());
    switch (this.size()) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        console.log('lg');
        return 'px-5 py-3 text-lg';
      default:
        return '';
    }
  };
}
