import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdrParent } from "./components/cdr-parent/cdr-parent";
import { CdrChild } from "./components/cdr-child/cdr-child";
import { Rxjsdemo } from "./components/rxjsdemo/rxjsdemo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CdrParent, CdrChild, Rxjsdemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp6');
}
