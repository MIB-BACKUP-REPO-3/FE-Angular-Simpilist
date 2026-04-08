import { Component } from '@angular/core';
import { FooterUi } from "../../../shared/components/footer-ui/footer-ui";

@Component({
  selector: 'app-footer',
  imports: [FooterUi],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  //use menu config for items population
}
