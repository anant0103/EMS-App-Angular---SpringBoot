import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-authorize-page',
  templateUrl: './not-authorize-page.component.html',
  styleUrls: ['./not-authorize-page.component.css']
})
export class NotAuthorizePageComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['']); 
   }
}
