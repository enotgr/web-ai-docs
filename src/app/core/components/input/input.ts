import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, inject, input, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { generateElementId } from '../../utils';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrls: ['./input.scss'],
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  private readonly cdr = inject(ChangeDetectorRef);

  readonly id = input<string>(generateElementId('input'));
  readonly type = input<string>('');
  readonly name = input<string>('');
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly disabled = input<boolean>(false);

  readonly readonly = input<boolean>(false);
  readonly size = input<string>('20');
  readonly maxlength = input<string>('');
  readonly required = input<boolean>(false);
  readonly autofocus = input<boolean>(false);
  readonly autocomplete = input<string>('off');

  readonly input = output<Event>();
  readonly change = output<Event>();
  readonly focus = output<void>();
  readonly blur = output<void>();
  readonly click = output<Event>();
  readonly keydown = output<KeyboardEvent>();
  readonly keyup = output<KeyboardEvent>();
  readonly keypress = output<KeyboardEvent>();
  readonly paste = output<ClipboardEvent>();
  readonly cut = output<ClipboardEvent>();

  value = '';
  focused = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: any): void {
    this.value = typeof val === 'string' ? val : val != null ? String(val) : '';
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.input.emit(event);
  }

  handleFocus() {
    this.focused = true;
    this.focus.emit();
  }

  handleBlur() {
    this.focused = false;
    this.onTouched();
    this.blur.emit();
  }
}
