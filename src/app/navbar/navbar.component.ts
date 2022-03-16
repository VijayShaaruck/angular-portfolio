import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedButton:string = 'about'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigatePage=(pageName:string = '') =>{
    this.selectedButton = pageName
    this.router.navigate([`${pageName}`]);
  }

}
