import { Component } from '@angular/core';
import { MatModule } from '../../modules/mat/mat.module';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
