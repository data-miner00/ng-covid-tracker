import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const burgerIcon: HTMLElement = document.querySelector('#burger');
    const navbarMenu: HTMLElement = document.querySelector('#nav-links');
    burgerIcon.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-active');
    });
  }
}
