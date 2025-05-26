import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent, HeroComponent]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({ once: true });
  }
}
