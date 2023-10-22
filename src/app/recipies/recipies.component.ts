import { Component,OnInit} from '@angular/core';
import { RecipieService } from './recipie.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers:[RecipieService ]
})
export class RecipiesComponent implements OnInit{
  ngOnInit(): void {
    
  }
}
