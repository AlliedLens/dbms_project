import { Component } from '@angular/core';
import { MatModule } from '../../../modules/mat/mat.module';
import { ColorSchemeService } from '../../../services/color-scheme.service';
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-setting-change-color-scheme',
  standalone: true,
  imports: [MatModule, NgIf, NgFor],
  templateUrl: './setting-change-color-scheme.component.html',
  styleUrl: './setting-change-color-scheme.component.scss'
})
export class SettingChangeColorSchemeComponent {
  public themes = [
    {
        name: 'dark',
        icon: 'brightness_3'
    },
    {
       name: 'light',
        icon: 'wb_sunny'
    }
  ];

  constructor(public colorSchemeService: ColorSchemeService) {
  }

  setTheme(theme: string) {
      this.colorSchemeService.update(theme);
  }

}
