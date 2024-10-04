import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { FeatherModule } from 'angular-feather';
import { Search,ShoppingCart,User } from 'angular-feather/icons';
import { BodyComponent } from './body/body.component';
import { CategoriesComponent } from './categories/categories.component';
const icons = {
  Search,
  ShoppingCart,
  User
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    BodyComponent,
    BodyComponent,
    CategoriesComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FeatherModule,
    BodyComponent,
    CategoriesComponent

  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ]
})
export class ComponentsModule { }
