import { Component, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('alfonzoramiro-dev');

  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');

    const saved = localStorage.getItem('lang');
    this.translate.use(saved ?? 'en');
  }
}