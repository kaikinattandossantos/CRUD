import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceComponent } from './services/service.component';
import { ComponentsComponent } from './components/components.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServiceComponent, ComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testandoCrud';
}
