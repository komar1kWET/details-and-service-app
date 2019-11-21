import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.sass']
})
export class RepairComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement.ownerDocument.body,
      'backgroundImage', 'url("../../../../assets/img/repair-page/bg-repair.png")'
    );
  }

}
