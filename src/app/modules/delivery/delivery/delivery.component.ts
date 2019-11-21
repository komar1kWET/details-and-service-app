import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement.ownerDocument.body, 'backgroundImage',
      'url("../../../../assets/img/delivery-page/bg-delivery.png")');
  }

}
