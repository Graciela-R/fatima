import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() titleButton!: string;
  @Input() nameIcon!:string;
  @Input() buttonSearch!: boolean;
  @Input() buttonBlue!: boolean;
  ngOnInit(){
    console.log("este es"+this.buttonSearch)
  }

}
