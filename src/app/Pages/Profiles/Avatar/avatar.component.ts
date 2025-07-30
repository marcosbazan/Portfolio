import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `<img [src]="imageUrl" [alt]="alt" [style.width.px]="size" [style.height.px]="size" [style.object-fit]="'cover'" [style.border-radius]="'50%'" />`,
  standalone: true
})
export class AvatarComponent {
  @Input() imageUrl: string = '';
  @Input() alt: string = 'Avatar';
  @Input() size: number = 150;
}
