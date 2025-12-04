import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Footer} from './footer/footer';
import {Header} from './header/header';
import {Services} from './services/services';
import {Portfolio} from './portfolio/portfolio';
import {About} from './about/about';
import {Process} from './process/process';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Services, Portfolio, About, Process],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('website');
}
