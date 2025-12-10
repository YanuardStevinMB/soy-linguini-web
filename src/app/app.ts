import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar/navbar';
import { DrinksCatalog } from './feature/drinks-catalog/drinks-catalog';
import { FoodCatalog } from './feature/food-catalog/food-catalog';
import { Welcome } from './feature/welcome/welcome';

import { ProcessSection } from "./feature/process-section/process-section";
import { ContactSectionComponent } from "./feature/contact-section/contact-section";

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, Navbar, DrinksCatalog, FoodCatalog, Welcome, ProcessSection, ContactSectionComponent],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('soy-linguini');
}
