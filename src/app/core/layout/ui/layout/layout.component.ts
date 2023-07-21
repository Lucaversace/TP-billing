import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MobileService } from '@shared/services/mobile.service';
import { NavigationSection } from '../../models/navigation-section';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [CommonModule, RouterModule],
})
export class LayoutComponent {
  private mobileService = inject(MobileService);

  @Input() navigationList!: NavigationSection[];
  isMenuVisible!: boolean;

  ngOnInit(): void {
    this.isMenuVisible = !this.mobileService.isMobile();
  }

  toggleMobileMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
