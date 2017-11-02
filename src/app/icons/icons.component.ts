import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'md-icon-demo',
  templateUrl: 'icons.component.html',
  styleUrls: ['icons.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IconsComponent {
  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIcon('thumb-up',
            sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/thumbup-icon.svg'))
        .addSvgIconSetInNamespace('core',
            sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/core-icon-set.svg'))
        .registerFontClassAlias('fontawesome', 'fa');
  }
}
