import { Injectable, inject } from '@angular/core';
import { WINDOW } from '../utils/window';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private static readonly MAX_PHONE_WIDTH = 600;
  private window = inject(WINDOW);

  isMobile(): boolean {
    return this.window.innerWidth <= MobileService.MAX_PHONE_WIDTH;
  }
}
