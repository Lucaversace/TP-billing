import { Component, Input, inject } from '@angular/core';
import { MobileService } from 'src/app/shared/services/mobile.service';
import { NavigationSection } from '../../models/navigation-section';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  private mobileService = inject(MobileService);

  @Input() navigationList!: NavigationSection[];
  isMenuVisible!: boolean;

  ngOnInit(): void {
    this.isMenuVisible = !this.mobileService.isMobile();
  }

  toggleMobileMenu() {
    console.log(this.isMenuVisible);
    this.isMenuVisible = !this.isMenuVisible;
  }
}
