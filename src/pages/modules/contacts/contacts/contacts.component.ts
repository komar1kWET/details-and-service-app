import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement.ownerDocument.body,
      'backgroundImage', 'url("../../../../assets/img/contacts-page/bg-contacts.png")'
    );
  }

}
