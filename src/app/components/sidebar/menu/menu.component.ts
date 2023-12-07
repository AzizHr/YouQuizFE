import { Component } from '@angular/core';
import {MenuItem} from "./menu-item/menuItem";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    new MenuItem('Dashboard', 'fa-solid fa-bars'),
    new MenuItem('Subjects', 'fa-regular fa-file'),
    new MenuItem('Levels', 'fa-regular fa-circle-up'),
    new MenuItem('Questions', 'fa-regular fa-circle-question'),
    new MenuItem('Medias', 'fa-regular fa-circle-play'),
    new MenuItem('Responses', 'fa-regular fa-comment'),
    new MenuItem('Validations', 'fa-regular fa-sun'),
  ];

}
