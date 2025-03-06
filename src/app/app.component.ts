import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';

@Component({
  imports: [RouterModule, IonApp],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Todo';
}
