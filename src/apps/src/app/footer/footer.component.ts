import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerTitle: string;
  footerDescription: string;
  footerEMail: string;
  footerTelephone: string;
  footerAddress: string;
  footerLogo: string;

  constructor() {
    this.footerTitle= environment.footerTitle;
    this.footerDescription= environment.footerDescription;
    this.footerEMail= environment.footerEMail;
    this.footerTelephone= environment.footerTelephone;
    this.footerAddress= environment.footerAddress;
    this.footerLogo= environment.footerLogo;
  }

  ngOnInit() {
  }

}
