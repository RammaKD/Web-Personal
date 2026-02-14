import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly destroyRef = inject(DestroyRef);
  readonly isMenuOpen = signal(false);
  readonly activeLang = signal('en');
  readonly langLabel = computed(() => this.activeLang().toUpperCase());

  constructor(private readonly translate: TranslateService) {
    const initial = this.translate.currentLang || this.translate.defaultLang || 'en';
    this.activeLang.set(initial);

    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => this.activeLang.set(event.lang));
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  toggleLang() {
    const next = this.activeLang() === 'en' ? 'es' : 'en';
    this.translate.use(next);
    localStorage.setItem('lang', next);
  }
}
