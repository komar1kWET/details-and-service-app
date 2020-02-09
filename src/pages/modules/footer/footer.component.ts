import { Component, OnInit } from '@angular/core';
import {SocialMedia} from '../../../shared/models/social-media';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  socialMedia: Array<SocialMedia> = [
    {
      imageUrl: '../../../assets/img/static/instagram_logo.png',
      externalUrl: '',
      name: 'instagram'
    },
    {
      imageUrl: '/assets/img/static/telegram_logo.png',
      externalUrl: 'https://t.me/Ilyas_akh',
      name: 'telegram'
    },
    {
      imageUrl: '../../../assets/img/static/whatsapp_logo.png',
      externalUrl: 'https://wa.me/79211839966',
      name: 'whatsapp'
    }
    ];

  constructor() { }

  ngOnInit() {
  }

  public navigateToSocialMessenger(link): void {
    window.location.href = link;
  }

}
