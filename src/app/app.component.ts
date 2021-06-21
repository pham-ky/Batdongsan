import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from './lib/base-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit, AfterViewInit{
  title = 'BatdongsanUser';
  public _renderer: any;
  
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadScripts();
  }
}