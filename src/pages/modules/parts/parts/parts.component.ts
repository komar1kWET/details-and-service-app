import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.sass']
})
export class PartsComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement.ownerDocument.body,
      'backgroundImage', 'url("../../../../assets/img/parts-page/bg-parts.png")'
    );
  }

}
