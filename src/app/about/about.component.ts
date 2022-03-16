import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  selectedButton:string = 'resume'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigatePage=(pageName:string = '') =>{
    this.selectedButton = pageName
    this.router.navigate([`${pageName}`]);
  }

}
