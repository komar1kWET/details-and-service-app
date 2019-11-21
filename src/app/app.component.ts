import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'details-and-service-app';
  private cookieValue: string;
  constructor(
    private cookieService: CookieService
  ) {}

  public ngOnInit(): void {
    this.cookieService.set('cookie-name', 'our cookie value');
    this.cookieValue = this.cookieService.get('cookie-name');
  }
}
