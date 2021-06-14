import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'BatdongsanUser';
  public _renderer: any;
  
  constructor(injector: Injector) {
    this._renderer = injector.get(Renderer2);
  }
  ngOnInit(): void {
  }
  public loadScripts() {
    this.renderExternalScript('../../assets/js/index.bundle.js').onload = () => {
    }
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this._renderer.appendChild(document.body, script);
    return script;
  }
  ngAfterViewInit() {
    this.loadScripts();
  }
}