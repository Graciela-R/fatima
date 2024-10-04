import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input() titleCategories!: string;
  @Input() image!: string;
  @Input() titleOffers!:string;
  @Input() descripcionOffers!:string;
  @Input() iscategories!: boolean;

}
