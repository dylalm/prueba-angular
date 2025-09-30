import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Usa styles.css global → no necesitas app.component.css
  // Si tienes app.component.css, descomenta esta línea:
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Dylan Damian Almaguer Acuña';
  specialty = 'Desarrollo de Software';
  interests = ['Cocinar', 'Escuchar música'];
}
