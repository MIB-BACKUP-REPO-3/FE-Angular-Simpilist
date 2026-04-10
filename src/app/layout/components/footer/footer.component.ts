import { Component } from '@angular/core';
import { FooterUi } from "../../../shared/components/footer-ui/footer-ui";

@Component({
  selector: 'app-footer',
  imports: [FooterUi],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  //use menu config for items population
}
